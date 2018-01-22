var getHTML = require('../5-makeModule/http-functions.js');


function printLowerCase(html) {
  console.log(html.toLowerCase());
}



getHTML.getHTML("sytantris.github.io/http-examples/step6/lowercase.html", printLowerCase);