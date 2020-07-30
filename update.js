use test_db;

db.users.find();

db.users.update(
{
    user: "Marek"
},
{
    user: "Marek",
    age:  29,
    gender: "male"
});

db.users.update(
{
    user: "Marek",
    age:  29,
    gender: "male"
},
{
    $SET:{GENDER:"MALE"}
});

db.users.update(
{
    user: "Marek",
    age:  29,
    gender: "male"
},
{
    $inc:{age:5}
});

db.users.find();
