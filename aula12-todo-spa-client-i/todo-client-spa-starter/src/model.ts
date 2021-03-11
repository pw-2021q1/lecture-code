namespace Model {
    const RA = "" // TODO: FILL WITH YOUR RA
    const HOST = "https://pw2021q1-todo-spa.herokuapp.com/api"

    /**
     * Domain object
     */
    export class ToDoItem {
        id?: number
        description: string
        tags?: string[]
        deadline?: string

        constructor(description: string) {
            this.id = 0
            this.description = description
            this.tags = []
            this.deadline = ""
        }
    }

    /**
     * DAO
     */
    export class ToDoItemDAO {
        /**
         * List all elements from the database
         * @returns a list of ToDoItem
         */
        async listAll(): Promise<ToDoItem[]> {
            try {
                const response = await fetch(`${HOST}/${RA}/list`)

                if (response.ok) {
                    return (await response.json()).items as ToDoItem[]
                }
                console.error("Server status: " 
                    + JSON.stringify(await response.json()))
                throw new Error("Failed to retrieved elements from the server")
            } catch(error) {
                console.log("Failed to list elements")
                throw error
            }
        }

        /**
         * Insert an element in the database
         * @param item a ToDoItem
         * @returns a boolean promise
         */
        async insert(item: ToDoItem): Promise<boolean> {
            try {
                const response = await fetch(`${HOST}/${RA}/add`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(item)
                })
                if (response.ok) {
                    return true
                }
                console.error("Server-side error. Failed to insert.")
                console.error("Server.status: " + JSON.stringify(await response.json()))

                throw new Error("Failed to insert element")
            } catch(error) {
                console.error("Failed to insert element")
                throw error
            }
        }
    }
}

// window.addEventListener("load", async function () {
//     const dao = new Model.ToDoItemDAO()

//     // console.log(await dao.listAll())
//     const item = new Model.ToDoItem("testing insertion")

//     dao.insert(item)
// })