var https = require('https'); 

function getAndPrintHTMLChunks (){
  var requestoptions = {
    host: 'sytantris.github.io',
	path: '/http-example/step.html'
  };
  
  https.get(requestoptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received:', data + '\n');
    });

 });
 
}
getAndPrintHTMLChunks();
