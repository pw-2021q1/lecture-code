/**
 * Web service for company profile
 */

import e from 'express'
import path from 'path'
import hbs from "express-handlebars"
import {multipartyExpress as multiparty, cleanup} from "multiparty-express"
import bodyParser from "body-parser"
import session from "express-session"
import flash from "express-flash"

import {config} from "../conf/config"
import * as dbConnect from "./models/db-connection"
import * as profileController from "./controllers/profile-controller"
import * as adminController from "./controllers/admin-controller"

const app = e()

/**
 * Configure session middleware
 */
app.use(session({
    secret: config.secret, 
    resave: false,
    saveUninitialized: false,
    store: dbConnect.sessionStore
}))
app.use((req, res, next) => {
    res.locals.authenticated = (req.session.authenticated) ? true : false
    next()
})

/**
 * Configure templating engine
 */
app.engine("handlebars", hbs({
    helpers: {
        userAge: (birthyear: number) => (new Date()).getFullYear() - birthyear,
        equals: (a: string, b: string) => a == b,
        isEmpty: (s: string) => !s || s.length == 0
    }
}))
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname, "..", "views"))

/**
 * Custom authentication middleware
 */
function authenticate(req: e.Request, res: e.Response, next: e.NextFunction) {
    if (req.session.authenticated) {
        next()
    } else {
        res.redirect("/login")
    }
}

/**
 * Flash message middleware
 */
app.use(flash())

/**
 * Static routes
 */
app.use('/static', e.static(path.join(__dirname, '..', 'static')));
app.use('/lib/bootstrap', e.static(
    path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist')));
app.use('/lib/jquery', e.static(
    path.join(__dirname, '..', 'node_modules', 'jquery', 'dist')));
app.use('/picture', e.static(config.upload_dir));

/**
 * Dynamic routes
 */
app.get("/", (req, res) => {
    res.redirect("/list")
})
app.get("/list", profileController.list)
app.get("/profile/:id", profileController.details)
app.get("/add", authenticate, profileController.addForm)
app.post("/add", authenticate, multiparty(), (req, res) => {
    profileController.addFormProcessing(req, res)
    cleanup(req)
})
app.get("/edit/:id", authenticate, profileController.editForm)
app.post("/edit", authenticate, multiparty(), (req, res) => {
    profileController.editFormProcessing(req, res)
    cleanup(req)
})
app.post("/remove", authenticate, bodyParser.urlencoded({extended: true}), 
    profileController.removeFormProcessing)
app.get("/login", adminController.loginForm)
app.post("/login", bodyParser.urlencoded({extended: true}), 
    adminController.loginFormProcessing)
app.get("/logout", adminController.logout)

/**
 * Software stack set-up 
 */
console.log("Starting server stack...")
dbConnect.connect()
    .then(() => {
        app.listen(config["server-port"], () => {
            console.log(`Server listening at ${config["server-port"]}`)
        })
    })
    .catch(error => {
        console.error("Failed to load server stack")
        console.error(error.stack)
    })


/**
 * Software stack tear-down 
 */
process.on('exit', (code) => {
    console.log(`Server exiting with code ${code}`)
})

function exitHandler() {
    dbConnect.disconnect()
        .then(() => process.exit())
        .catch(error => {
            console.error("Failed to shutdown server stack")
            console.error(error.stack)
        })
}
process.once('SIGINT', exitHandler)
process.once('SIGUSR2', exitHandler)
