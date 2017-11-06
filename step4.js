
var https = require('https'); 
var args = process.argv.slice(2);
var requestOptions = {
  host: args[0],
  path: args[1],
};

function getHTML(options, callback) {
  
  https.get(requestOptions, function (res) {
    
    // set encoding of received data to UTF-8
    res.setEncoding('utf8');

    var rawData = '';
    res.on('data', function(chunk) {
      console.log('GOT DATA');
      console.log(chunk);
      rawData += chunk;
    });

    res.on('end', function(){
      callback(rawData);
    });
  }
)}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions , printHTML);
