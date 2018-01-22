var https = require('https');



function getAndPrintHTMLBuffer () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

https.get(requestOptions, function (response) {
  response.setEncoding('utf8');

  var bufferData = "";
  response.on('data', function (chunk) {
    console.log('Chunk Received.')
    bufferData += chunk;
  });

  response.on('end', function() {
    console.log('Response stream complete.');
    console.log(bufferData);
  });

});


}

getAndPrintHTMLBuffer();