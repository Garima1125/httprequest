var https = require('https'); 

function getAndPrintHTML(){
  var requestoptions = {
    host: 'sytantris.github.io',
	path: '/http-example/step2.html'
  };
  
  https.get(requestoptions, function (res) {

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
getAndPrintHTML();
