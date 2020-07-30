use test_db;

db.createUser({
    user: "Marek",
    pwd:  "admin",
    roles: [
        "readWrite"
    ]
});