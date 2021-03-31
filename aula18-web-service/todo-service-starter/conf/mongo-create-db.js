
// Mongoshell script to create an empty profiles db

db = connect('127.0.0.1:27017/todo-api')

// drop db
db.dropDatabase()
// recreate db
db = connect('127.0.0.1:27017/todo-api')

db.createCollection('todo-items')
db['todo-items'].createIndex({'id': 1}, {unique: true});

db.createCollection('sequences');
db.sequences.insertOne({
    name: 'todo-item-id', 
    value: 1
});

function genId() {
    return db["sequences"].findOneAndUpdate(
        {name: "todo-item-id"},
        {$inc: {value: 1}}).value
}

db["todo-items"].insertOne({
    "id": genId(),
    "description": "Make up some new ToDos",
    "deadline": new Date(Date.parse("01/01/2019 10:45")).toUTCString(),
})
db["todo-items"].insertOne({
    "id": genId(),
    "description": "Prep for Monday's class",
    "tags": ["tag1", "tag2"],
    "deadline": new Date(Date.parse("10/01/2019")).toUTCString(),
})
db["todo-items"].insertOne({
    "id": genId(),
    "description": "Answer recruiter emails on LinkedIn",
    "tags": ["tag1", "tag2"],
})
db["todo-items"].insertOne({
    "id": genId(),
    "description": "Take Gracie to the park",
    "deadline": new Date(Date.parse("04/07/2020 11:45")).toUTCString(),
})
db["todo-items"].insertOne({
    "id": genId(),
    "description": "Finish writing book",
    "tags": ["tag1", "tag2"],
})
