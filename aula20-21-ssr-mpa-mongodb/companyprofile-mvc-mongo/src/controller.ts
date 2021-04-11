import e from "express"
import * as fs from "fs"
import * as path from "path"
import multipartyExpress from "multiparty-express"
import * as model from "./model"
import { config } from "../conf/config"

/**
 * List all profiles.
 * @param req the request object
 * @param res the response object
 */
export async function list(req: e.Request, res: e.Response) {
    try {
        res.render('list', {
            profiles: await model.UserProfileDAO.getInstance().listAll()
        })
    } catch(error) {
        console.error(error)
        res.render("error") // TODO
    }
}

/**
 * Show the details of a profile.
 * @param req the request object
 * @param res the response object
 */
export async function details(req: e.Request, res: e.Response) {
    const id = parseInt(req.params.id) || 0

    try {
        res.render("profile", {
            profile: await model.UserProfileDAO.getInstance().findById(id)
        })
    } catch(err) {
        res.render("error", {
            type: "unknown_user", 
            params: {
                id: req.params.id
            }
        })
    }
}

 export function addForm(req: e.Request, res: e.Response) {
     res.render("add", {
        profile: new model.UserProfile("", new Date().getFullYear(), "", "")
    })
 }

 async function saveProfile(req: e.Request, res: e.Response, edit: boolean) {
    const getField = (name: string) => 
        (name in req.fields) ? req.fields[name].pop() : ""
    const saveProfilePicture = async (file: multipartyExpress.File | undefined) => {
        try {
            const fileInfo = await fs.promises.stat(file?.path || "")

            if (file && fileInfo.isFile() && fileInfo.size > 0) {
                const filename = path.basename(file.path)
                const newPath = path.join(config.upload_dir, filename)

                await fs.promises.copyFile(file.path, newPath)

                return filename
            } 
        } catch (error) {
            console.error("Failed to move profile picture")
            throw error
        }

        return ""
    }

    const name = getField("name")
    const birthyear = parseInt(getField("birthyear")) 
        || new Date().getFullYear()
    const career = getField("career")
    const bio = getField("bio")
    const profile = new model.UserProfile(name, birthyear, career, bio)

    try {
        if (profile.isValid()) {
            if ("picture" in req.files) {
                profile.picture = 
                    await saveProfilePicture(req.files["picture"].pop())
            }
            if (edit) { // edit
                profile.id = parseInt(getField("id")) || 0
                if (await model.UserProfileDAO.getInstance().update(profile)) {
                    res.render("status", {type: "user_edit_success"})
                } else {
                    throw Error("Failed to update profile in the database")
                }
            } else { // insert
                if (await model.UserProfileDAO.getInstance().insert(profile)) {
                    res.render("status", {type: "user_add_success"})
                } else {
                    throw Error("Failed to insert profile in the database")
                }
            }
        } else {
            throw Error("Invalid fields in the form. Please try again.")
        }
    } catch (error) {
        console.error(error)
        res.render("status", {
            type: (edit) ? "user_edit_error" : "user_add_error"
        })
    }
 }

 export async function addFormProcessing(req: e.Request, res: e.Response) {
    saveProfile(req, res, false)
 }

 export async function editForm(req: e.Request, res: e.Response) {
     const id = parseInt(req.params.id) || 0

     try {
         res.render("edit", {
             profile: await model.UserProfileDAO.getInstance().findById(id)
         })
     } catch (error) {
         console.error(error)
         res.render("status", {type: "user_edit_load_error"})
     }
 }

 export function editFormProcessing(req: e.Request, res: e.Response) {
     saveProfile(req, res, true)
 }

 export async function removeFormProcessing(req: e.Request, res: e.Response) {
     const id = parseInt(req.body.id) || 0
       
     try {
         if (await model.UserProfileDAO.getInstance().removeById(id)) {
            res.render("status", {type: "user_remove_success"})
         } else {
             throw Error("Failed to remove user")
         }
     } catch (error) {
         console.error(error)
         res.render("status", {type: "user_remove_error"})
     }
     // TODO: Remove profile picture from the uploads folder
 }
