import e from "express"
import {Database} from "./database"
import {ToDoItemService, ValidationError} from "./service"
import cors from "cors"
import * as path from "path"

const staticDir = path.join(__dirname, "..", "static")

const database = new Database()
const service = new ToDoItemService(database)

const app = e()
const api = e.Router()

app.use(cors())
app.use("/api", api)
app.use("/client", e.static(path.join(staticDir, "client")))
app.use("/doc", e.static(path.join(staticDir, "doc")))

api.get("/list", async (req, res) => {
    try {
        res.status(200).json({
            status: "ok",
            items: await service.list()
        })
    } catch (error) {
        res.status(500).json({
            status: "failure",
            message: "Internal error. Failed to list items."
        })
    }
    
})

api.put("/add", e.json(), async (req, res) => {
    try {
        await service.add(req.body)
        res.status(200).json({
            status: "ok"
        })
    } catch (error) {
        if (error instanceof ValidationError) {
            res.status(406).json({
                status: "failure",
                message: "Invalid data received. Please check documentation.",
                debug: "Received: " + JSON.stringify(req.body)
            })
        } else {
            res.status(500).json({
                status: "failure",
                message: "Internal error. Failed to insert item"
            })
        }
    }
})

const port = process.env.PORT || 3000

app.listen(port, async () => {
    try {
        await database.connect()
        console.log(`ToDo! server listening on port ${port}`)    
    } catch (error) {
        console.error(error)
    }
})


async function exitHandler() {
    try {
        console.log("Server exiting...")
        await database.disconnect()
    } catch (error) {
        console.error(error)
    } finally {
        console.log("Server exited")
        process.exit()
    }
}

process.once("SIGINT", exitHandler)
process.once("SIGUSR2", exitHandler)
