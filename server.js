const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abdulla43005",
  database: "omobio_login",
});

app.post("/signup", (req, res) => {
  const name = req.body.name;
  const username = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "INSERT INTO login (name, useName, email, password) VALUES (?,?,?,?)",
    [name, username, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        alert("User added successfully");
      }
      console.log(result);
    }
  );
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM login WHERE email = ? and password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.status(401).send({
          success: false,
          message: "Sory, email and password dosn't match",
          err: err,
        });
        alert("Sory, email and password dosn't match");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
