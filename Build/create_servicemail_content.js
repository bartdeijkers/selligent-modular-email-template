/*
  This script will build the servicemail content based on strucure/sections/03-content.html
  author : Fransjo Leihitu (fransjo.leihitu@sanoma.com)
*/

var fs = require("fs"),
    path = require("path"),
    util = require("util"),
    S = require('string');

var template;
var sourceFile  = path.join(__dirname,"../structure/sections/","03-content.html");
var destFile    = path.join(__dirname,"../structure/sections/servicemail/","03-content.html");

fs.readFile(sourceFile, 'utf8',function (err,data) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    console.log("- found " + sourceFile);

    template = util.format(data);

    var t = S(template).replaceAll('ARTICLES\\MAIN', 'CONTENT').strip("\n").s;
    console.log("- replaced 'ARTICLES\\MAIN' with 'CONTENT'");
    template=t;

    fs.unlink(destFile, function(err) {
      console.log("- delete old " + destFile);
      fs.writeFile(destFile, template , function(err) {
          if(err) {
              return console.log(err);
          }

          console.log("- created new " + destFile);
      });

    });
});
