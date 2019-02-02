const express = require('express');
const bodyParser = require('body-parser')
const github = require('../helpers/github.js')
let app = express();

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
      console.log(data)
      console.log('we got the data to the server!')
      // db.query(`insert ${data} into tables`)
    // res.status(200)
    // res.send()
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

