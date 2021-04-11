
// Mongoshell script to create an empty profiles db

db = connect('127.0.0.1:27017/associated-consulting');

// drop db
db.dropDatabase()
// recreate db
db = connect('127.0.0.1:27017/associated-consulting');
// create collection
db.createCollection('profiles');

// sample data
db.profiles.insertOne({
    "id": 1,
    "name": "joao silva",
    "birthyear": 1992,
    "career": "professional surfing",
    "bio": "<b>Joao Silva</b> is one the top surfers in Brazil.",
    "picture": "profile_1.jpg",
})
db.profiles.insertOne({
    "id": 2,
    "name": "maria santos",
    "birthyear": 1987,
    "career": "customer relationship management",
    "bio": "<em>Maria Santos</em> is a workaholic who loves cats.", 
    "picture": "profile_2.jpg"
})

// unique index
db.profiles.createIndex({'id': 1}, {unique: true});
// profile id sequence
db.createCollection('sequences');
db.sequences.insertOne({
    name: 'profile_id', 
    value: 3
});





