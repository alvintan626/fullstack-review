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

const getdb = (callback)=>{
    db.query('select * from githubInfo;', (err,data)=>{
        if (err){
            callback(err);
            return;
        }   else{
            callback(null,data[0])
        }

    })
}

module.exports.postdb = postdb;
module.exports.getdb = getdb;