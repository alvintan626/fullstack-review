const request = require('request');
const config = require('../config.js');

let getReposByUsername = (callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  
    let options = {
      url: `https://api.github.com/repos/${username}/`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${config.TOKEN}`
      }
    };

  $.get(options, (err,data)=>{
    if(err){
      callback(err)
    } else{
      callback(null,data)
    }
  })



}

module.exports.getReposByUsername = getReposByUsername;