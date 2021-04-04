/**
 * Handlebars examples
 */

import express from 'express'
import path from 'path'
import handlebars from 'express-handlebars'

const app = express()

/**
 * Set handlebars as template engine
 */
app.engine('handlebars', handlebars({
    defaultLayout: 'master', 
    helpers: {
        equals: (a: string, b: string) => a == b
    }
}))
app.set('view engine', 'handlebars')

/**
 * Set the view lookup folder
 */
app.set('views', path.resolve(__dirname, 'views'))

/**
 * Root route
 */
app.get("/", (req, res) => {
    res.send("Access /saymyname/:firstname/:lastname for a handlebars demonstration")
})

/**
 * Route rendered with a template view
 */
app.get('/saymyname/:fname/:lname', (req, res) => {
    res.render('index', {
        fname: req.params.fname, 
        lname: req.params.lname});
})

/**
 * Template route rendered with an alternate layout
 */
app.get('/saymyname2/:fname/:lname', (req, res) => {
    res.render('index', {
        layout: 'alternate.handlebars',
        fname: req.params.fname, 
        lname: req.params.lname}, );
})

/**
 * Error template route
 * The template is an example of the "if" block helper
 */
app.get("/error", (req, res) => {
    res.render("status", {
        code: "err_required_fields"
    })
})

/**
 * List temlate route
 * The template is an example of the "each" block helper
 */
app.get("/list", (req, res) => {
    res.render("list", {
        items: ["Item 1", "Item 2", "Item 3", "Item 4"]
    })
})

const port = parseInt(process.argv[2]) || 3000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})