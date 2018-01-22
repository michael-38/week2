var getHTML = require('../5-makeModule/http-functions.js');


function printReverse(html) {
  console.log(html.split("").reverse().join(""));
}



getHTML.getHTML("sytantris.github.io/http-examples/step6/reverse.html", printReverse);