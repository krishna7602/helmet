const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'signup'
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`fname`, `lname`, `email`, `password`) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.fname,
        req.body.lname,
        req.body.email,
        req.body.password
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("error");
        }
        console.log("Data inserted successfully");
        return res.json(data);
    });
});
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHEREb`email` = ? AND `password` = ?";
    
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("error");
        }
        // console.log("Data inserted successfully");
        if (data.length > 0) {
            return res.json("success");
        }
        else 
            return res.json("failed");
        });
});


app.listen(8081, ()=>{
    console.log("listening");
})