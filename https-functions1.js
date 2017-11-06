



module.exports = function getHTML(requestOptions, callback) {
  var https = require('https');

    var rawData = '';
  https.get(requestOptions, function (res) {
    
    // set encoding of received data to UTF-8
    res.setEncoding('utf8');

    res.on('data', function(chunk) {
      console.log('GOT DATA');
      console.log(chunk);
      rawData += chunk;
    });

    res.on('end', function(){
      callback(rawData);
    });
  });
};


