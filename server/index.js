const express = require('express');
const bodyParser = require('body-parser')
const github = require('../helpers/github.js')
let app = express();
const postdb = require('../database/sqldb.js').postdb;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  var username = Object.keys(req.body)[0]
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  // 
  github.getReposByUsername(username, (err,data)=>{
    if (err){
      console.log(err);
      return;
    } else {
      console.log(Object.values(data[0]))
      console.log('we got the data to the server!')
      postdb(`insert into githubInfo(name, description, url, forks, id) values (
        '${Object.values(data[0])[0]}',
        '${Object.values(data[0])[1]}',
        '${Object.values(data[0])[2]}',
        '${Object.values(data[0])[3]}',
        '${Object.values(data[0])[4]}'
        ),
        (
        '${Object.values(data[1])[0]}',
        '${Object.values(data[1])[1]}',
        '${Object.values(data[1])[2]}',
        '${Object.values(data[1])[3]}',
        '${Object.values(data[1])[4]}'
        )`, (err)=>{
        if(err){
          console.log(err);
          return;
        } else {
          res.status(200)
          res.send()
        }
      })
    }

  })
    

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos


});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

