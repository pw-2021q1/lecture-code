/**
 * "Hello World" server using Express
 */
import e from "express"

const port = process.argv[2] || 3000
const app = e()

app.get("/hello", (req, res) => res.send("Hello World!"))

app.get("/goodbye", (req, res) => res.send("Goodbye!"))

app.listen(port, () => console.log(`Listening on port ${port}`))