/**
 * Controller for the "Admin" entity
 * 
 */

import e from "express"
import * as bcrypt from "bcrypt"
import * as model from "../models/admin-model"
import "../session-data"

/**
 * Renders the login form
 * @param req the request
 * @param res the response
 */
export function loginForm(req: e.Request, res: e.Response) {
    res.render("login")
}

/**
 * Process the login form
 * Validates user authenticated state based on encrypted password
 * @param req the request
 * @param res the response
 */
export async function loginFormProcessing(req: e.Request, res: e.Response) {
    const email = req.body.email || ""
    const password = req.body.password || ""
    const admin = new model.Admin(email, password)

    try {
        if (!admin.isValid())
            throw Error("Invalid login parameters")
        const retrAdmin = 
            await model.AdminDAO.getInstance().findByEmail(admin.email)
        if (await bcrypt.compare(admin.password, retrAdmin.password)) {
            req.session.authenticated = true
            req.flash("type", "login")
            req.flash("name", retrAdmin.name)
            res.redirect("/")
        } else {
            throw Error("Login credentials did not match")
        }
    } catch (error) {
        req.session.authenticated = false
        console.error(error)
        res.render("status", {type: "invalid_login"})
    }
}

/**
 * Invalidates the user authentication state
 * @param req the request
 * @param res the response
 */
export function logout(req: e.Request, res: e.Response) {
    if (req.session.authenticated) {
        req.session.authenticated = false
        req.flash("type", "logout")
    }
    res.redirect("/")
}