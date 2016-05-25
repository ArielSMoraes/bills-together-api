var app = require('express')();
var handler = require('./routes/users');

app.get("/users", handler.getUsers);
app.get("/user/:id", handler.getUser);

app.listen(3000);

console.log("simple app created:");
console.log("http://localhost:3000");
