var https = require('https'); 

function getAndPrintHTMLChunks (){
  var requestoptions = {
    host: 'sytantris.github.io',
	path: '/http-example/step.html'
  };
  
  https.get(requestoptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log('Chunk Received:', data + '\n');
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    // response.on('end', function() {
    //   console.log('Response stream complete.');
    // });

 });
 
}
getAndPrintHTMLChunks();
