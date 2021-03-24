/**
 * Mongoshell script to create a fresh ToDo! db
 */

db = connect("localhost:27017/todo-api")

db.dropDatabase()
db = connect("localhost:27017/todo-api")

db.createCollection("todo-items")
db["todo-items"].createIndex({"id": 1}, {unique: true})

db.createCollection("sequences")
db.sequences.insertOne({
    name: "todo-item-id",
    value: 1
})

const nextId = () => db.sequences.findOneAndUpdate(
    {name: "todo-item-id"},
    {$inc: {value: 1}}).value

db["todo-items"].insertOne({
    id: nextId(),
    description: "Make up some new ToDos",
    deadline: new Date(Date.parse("01/01/2019")).toUTCString()
})
db["todo-items"].insertOne({
    id: nextId(),
    description: "Prep for Monday's class",
    tags: ["tag1", "tag2"],
    deadline: new Date(Date.parse("10/01/2019")).toUTCString()
})
db["todo-items"].insertOne({
    id: nextId(),
    description: "Answer recruiter emails on Linkedin",
    tags: ["tag1", "tag2"]
})
db["todo-items"].insertOne({
    id: nextId(),
    description: "Take Gracie to the park",
    deadline: new Date(Date.parse("04/07/2020")).toUTCString()
})
db["todo-items"].insertOne({
    id: nextId(),
    description: "Finish writing book",
    tags: ["tag3", "tag4"]
})