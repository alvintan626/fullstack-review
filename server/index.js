const express = require('express');
let app = express();
const github = require('../helpers/github.js')


app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  // 
  github.getReposByUsername((err,data)=>{
    if(err){
      console.log(err);
      return
      
    }

    console.log(data)

    // db.query(`insert ${data} into tables`)
    res.status(200)
    res.send()
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

