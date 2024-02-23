const mysql = require("mysql");
const CONFIG = require("./config");
const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection(CONFIG);
app.post("/register", (req, res) => {
  const email = req.body.useremail;
  const password = req.body.userpassword;

  connection.query(
    "INSERT INTO users(email, password) VALUES(?,?)",
    [email, password],
    (err, result) => {
      console.log(err);
    }
  );
});
app.post("/login", (req, res) => {
  const email = req.body.useremail;
  const password = res.body.userpassword;

  connection.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Wrong email or password" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("====================================");
  console.log("server run");
  console.log("====================================");
});
