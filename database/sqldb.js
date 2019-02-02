const mysql = require('mysql')

const db =  mysql.createConnection({
    host: "localhost",
    user: "student",
    password: "student"
  });

db.connect();

const postdb = ()=>{
    db.query('INSERT ', (err,data)=>{
        
    })
}