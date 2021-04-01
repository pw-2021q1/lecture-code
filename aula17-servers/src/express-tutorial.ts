/**
 * Web server demonstrating core features of the Express framework
 */

import e from "express"
import * as path from "path"

const port = process.argv[2] || 3000
const app = e()

const STATIC_DIR = path.join(__dirname, "..", "static")

/**
 * Route
 */
app.get("/hello", (req, res) => res.send("Hello World!"))

/**
 * Route
 */
app.get("/goodbye", (req, res) => res.send("Goodbye!"))

app.get("/internal-error", (req, res) => res.status(500).send("Server failed"))

/**
 * Route for static middleware
 */
app.use("/static", e.static(STATIC_DIR))

/**
 * Multi-middleware response processing
 */
app.get("/multi", (req, res, next) => {
    res.setHeader("Content-Type", "text/html")
    res.write("First middleware<br>")
    next()
})

app.get("/multi", (req, res, next) => {
    res.write("Second middleware<br>")
    next()
})

app.get("/multi", (req, res, next) => {
    res.write("Third middleware<br>")
    res.end()
})

/**
 * Same path served by different HTTP methods
 */
app.all("/process", (req, res, next) => {
    res.setHeader("Content-Type", "text/html")
    res.write("Processed by ALL middleware<br>")
    next()
})

app.get("/process", (req, res) => {
    res.write("Processed form via GET")
    res.end()
})

app.post("/process", (req, res) => {
    res.write("Processed form via POST")
    res.end()
})

/**
 * Processing form data with GET and POST
 */
declare global {
    namespace Express {
        export interface Request {
            data?: any
        }
    }
}

app.get("/process2", (req, res, next) => {
    req.data = req.query
    next()
})

app.post("/process2", e.urlencoded({extended: true}), (req, res, next) => {
    req.data = req.body
    next()
})

app.all("/process2", (req, res) => {
    const data = req.data
    const isValid = data
        && "first-name" in data
        && "last-name" in data
        && (data["first-name"]?.toString().trim().length || 0) > 0
        && (data["last-name"]?.toString().trim().length || 0) > 0

    if (isValid) {
        res.send(`Hello, ${data['first-name']} ${data['last-name']}.
            Welcome to our Website.`)
    }

    res.send("Both first name and last name are required")
})

/**
 * Route parameters
 */
app.get("/name/:firstname/:lastname", (req, res) => {
    const firstName = req.params["firstname"]
    const lastName = req.params["lastname"]

    res.send(`Hello, ${firstName} ${lastName}.
            Welcome to our Website.`)
})

/**
 * Serving files according to request params
 */
app.get("/user/:id/photo", (req, res) => {
    res.sendFile(path.join(STATIC_DIR, "img", `user-${req.params.id}.jpg`))
})

/**
 * Route with string pattern matching
 * Will match: /userdetails, /userrrrrrrDetails, etc.
 */
 app.get("/user+details", (req, res) => res.send(req.originalUrl))

 /**
  * Route with regular expression pattern matching
  * Will match any path that contains ufabc
  */
 app.get(/ufabc/, (req, res) => res.send(req.originalUrl))
 

app.get("/break-it", (req, res) => {
    throw new Error("Uh-oh")    
})

app.use((err: Error, req: e.Request, res: e.Response, next: e.NextFunction) => {
    console.error(err)
    res.status(500).send('Something broke!')
})

/**
 * Default route (pathless middleware)
 */
app.use((req, res) => res.send("This resource does not exist"))


app.listen(port, () => console.log(`Listening on port ${port}`))