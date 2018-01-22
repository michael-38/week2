var https = require('https');



function getAndPrintHTMLParameter (url) {

// var hostParameter = //regex for text up until "/", convert to string
// var pathParameter = //regex for text after "/", convert to string

var regexHost = (/^[^/]+/g);
var regexPath = (/\/(.*)/g);
var hostParameter = url.match(regexHost).toString();
var pathParameter = url.match(regexPath).toString();


  var requestOptions = {
    host: hostParameter,
    path: pathParameter
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

getAndPrintHTMLParameter("sytantris.github.io/http-examples/step1.html");