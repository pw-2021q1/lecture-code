/**
 * Controller that handles both application and request-response processing
 */
import e from "express"
import * as model from "./model"

/**
 * List all profiles.
 * @param req the request object
 * @param res the response object
 */
export function list(req: e.Request, res: e.Response) {
    res.render('list', {profiles: model.UserProfileDAO.listAll()})
}

/**
 * Show the details of a profile.
 * @param req the request object
 * @param res the response object
 */
export function details(req: e.Request, res: e.Response) {
    const id = parseInt(req.params.id) || 0

    try {
        res.render("profile", {
            profile: model.UserProfileDAO.findById(id)
        })
    } catch (err) {
        res.render('error', {
            type: 'unknown_user',
            params : {
                id: req.params.id
            }
        })
    }
}