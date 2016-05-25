var app = require('express')();
var user = require('./routes/users');
var bills = require('./routes/bills');

app.get("/users", user.getUsers);
app.get("/user/:id", user.getUser);

app.get("/bills", bills.getBills);
app.get("/bill/:id", bills.getBill);

app.listen(3000);

console.log("simple app created:");
console.log("http://localhost:3000");
