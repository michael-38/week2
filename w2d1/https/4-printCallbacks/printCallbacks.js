var https = require('https');


function getHTML (url, callback) {

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
    printHTML(bufferData);
  });

});

}

function printHTML(html) {
  console.log(html);
}


getHTML("sytantris.github.io/http-examples/step1.html", printHTML);




