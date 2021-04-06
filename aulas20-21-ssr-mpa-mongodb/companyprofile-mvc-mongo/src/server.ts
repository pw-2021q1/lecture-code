import express from 'express'
import path from 'path'
import hbs from "express-handlebars"
import {multipartyExpress as multiparty, cleanup} from "multiparty-express"
import bodyParser from "body-parser"

import {config} from "../conf/config"
import * as dbConnect from "./db-connection"
import * as model from "./model"
import * as controller from "./controller"


const app = express()

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
 * Static routes
 */
app.use('/static', express.static(path.join(__dirname, '..', 'static')));
app.use('/lib/bootstrap', express.static(
    path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist')));
app.use('/lib/jquery', express.static(
    path.join(__dirname, '..', 'node_modules', 'jquery', 'dist')));
app.use('/picture', express.static(config.upload_dir));

/**
 * Dynamic routes
 */
app.get("/", (req, res) => {
    res.redirect("/list")
})
app.get("/list", controller.list)
app.get("/profile/:id", controller.details)
app.get("/add", controller.addForm)
app.post("/add", multiparty(), (req, res) => {
    controller.addFormProcessing(req, res)
    cleanup(req)
})
app.get("/edit/:id", controller.editForm)
app.post("/edit", multiparty(), controller.editFormProcessing)
app.post("/remove", bodyParser.urlencoded({extended: true}), 
    controller.removeFormProcessing)

/**
 * Makes sure the db is on before server is on
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


process.on('exit', (code) => {
    console.log(`Server exiting with code ${code}`)
});
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
