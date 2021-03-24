export const config = {
    db: {
        url: "mongodb://localhost:27017",
        name: "todo-api",
        collections: {
            todoItems: "todo-items",
            sequences: "sequences"
        }
    }
}