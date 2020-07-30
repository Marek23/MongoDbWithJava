use test_db;

// db.createCollection('users');

db.users.insert({
    user: "Marek",
    age:  "27"
})

show collections

db.users.find()
