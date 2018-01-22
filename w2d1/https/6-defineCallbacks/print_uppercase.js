var getHTML = require('../5-makeModule/http-functions.js');


function printUpperCase(html) {
  console.log(html.toUpperCase());
}



getHTML.getHTML("sytantris.github.io/http-examples/step6/uppercase.html", printUpperCase);