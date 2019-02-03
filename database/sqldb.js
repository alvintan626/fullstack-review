const mysql = require('mysql')

const db =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "student",
    database: "github"
  });

db.connect();

const postdb = (insert)=>{
    db.query(insert, (err)=>{
        if (err){
            console.log(err);
            return;
        } else {
            console.log('stored data into db')
        }
        
    })
}

module.exports.postdb = postdb;