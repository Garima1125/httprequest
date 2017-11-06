var https = require('https'); 
var args = process.argv.slice(2);
function getAndPrintHTML(options){

  var requestOptions = {
     host: args[0],
     path: args[1],
  };
  

https.get(requestOptions, function (res) {
    
    // set encoding of received data to UTF-8
   res.setEncoding('utf8');

  var rawData = '';
  res.on('data', function(chunk) {
    console.log('GOT DATA');
    console.log(chunk);
    rawData += chunk;
  });
 });
 
}
getAndPrintHTML(args);
 
  
