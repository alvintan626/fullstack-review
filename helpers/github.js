const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  
    let options = {
      url: `https://api.github.com/users/${username}/repos`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${config.TOKEN}`
      }
    };

    request(options, (error, response, body)=> {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);

        //get length of repos, cap at 25
        var data = [];
        for (var i = 0; i < info.length; i++){
          if (info.length === 25){
            break;
          }
          data.push({
            name: info[i].name,
            description: info[i].description,
            url: info[i].html_url,
            forks: info[i].forks_count,
            id: info[i].id
          })
        }
        callback(null,data)
      }
    })
}

module.exports.getReposByUsername = getReposByUsername;