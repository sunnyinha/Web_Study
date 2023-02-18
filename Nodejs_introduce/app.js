const fs = require("fs");
const path = require("path");
const express = require("express");
const { json } = require("body-parser");

const app = express();

//url 형식 데이터를 parsing 해줌
app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000/currenttime

app.get("/", function (req, res) {
  res.send(
    "<form action='/store-user' method='POST'><label>Your Name: </label><input type='text' name='username'><button>Submit</button></form>"
  );
}); // localhost:3000/

app.post("/store-user", function (req, res) {
  //req.body : post 요청 데이터에 엑세스 가능
  //id가 아닌 name으로 acess
  const userName = req.body.username;

  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName);
  existingUsers;

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));
  res.send("<h1>Username stored!</h1>");
});

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = "<ul>";

  for (const user of existingUsers) {
    responseData += "<li>" + user + "</li>";
  }
  responseData += "</ul>";

  res.send(responseData);
});

app.listen(3000);
