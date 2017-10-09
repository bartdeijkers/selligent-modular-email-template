/*
  This script will build base_template.html
  author : Fransjo Leihitu (fransjo.leihitu@sanoma.com)
*/

var fs = require("fs"),
    path = require("path"),
    util = require("util"),
    S = require('string');

    var doctype,
        head,
        body,
        template,
        admin_html,
        webversion_html,
        content_html,
        usercustom_html;

var destFile  = path.join(__dirname,"../","base_template.html");
var tplFile = path.join(__dirname,"templates/","base_template.html.tpl");

fs.readFile(tplFile, 'utf8',function (err,data) {

  if (err) {
      console.log(err);
      process.exit(1);
  }

  console.log("- using template " + tplFile);

  template = util.format(data);

  var srcFile1 = path.join(__dirname,"../structure/","0_doctype.html");
  fs.readFile(srcFile1, 'utf8',function (err,data) {
      if (err) {
          console.log(err);
          process.exit(1);
      }
      doctype = util.format(data);
      console.log("- found " + srcFile1);

      var srcFile2 = path.join(__dirname,"../structure/","1_header.html");
      fs.readFile(srcFile2, 'utf8',function (err,data) {
          if (err) {
              console.log(err);
              process.exit(1);
          }
          head = util.format(data);
          console.log("- found " + srcFile2);

          var srcFile3 = path.join(__dirname,"../structure/","2_body.html");
          fs.readFile(srcFile3, 'utf8',function (err,data) {
              if (err) {
                  console.log(err);
                  process.exit(1);
              }
              console.log("- found " + srcFile3);
              body = util.format('%s' , data);

              var t = S(template).replace('[[doctype]]', doctype).strip("\n").s;
              var t1 = S(t).replace('[[head]]', head).strip("\n").s;
              var t2 = S(t1).replace('[[body]]', body).strip("\n").s;
              template = t2;

              var srcFile = path.join(__dirname,"../structure/sections/","01-admin_overlay.html");
              fs.readFile(srcFile, 'utf8',function (err,data) {
                  if (err) {
                      console.log(err);
                      process.exit(1);
                  }
                  console.log("- found " + srcFile);
                  admin_html = util.format(data);

                  var t = S(template).replace('[[admin_html]]', admin_html).s;
                  template = t;

                  fs.readFile(path.join(__dirname,"../structure/sections/","02-webversion.html"), 'utf8',function (err,data) {
                      if (err) {
                          console.log(err);
                          process.exit(1);
                      }
                      console.log("- found 02-webversion.html");
                      webversion_html = util.format(data);

                      var t = S(template).replace('[[webversion_html]]', webversion_html).s;
                      template = t;

                      fs.readFile(path.join(__dirname,"../structure/sections/","03-content.html"), 'utf8',function (err,data) {
                          if (err) {
                              console.log(err);
                              process.exit(1);
                          }
                          console.log("- found 03-content.html");
                          content_html = util.format(data);

                          var t = S(template).replace('[[content_html]]', content_html).s;
                          template = t;

                          fs.readFile(path.join(__dirname,"../structure/sections/","04-user_custom.html"), 'utf8',function (err,data) {
                              if (err) {
                                  console.log(err);
                                  process.exit(1);
                              }
                              console.log("- found 04-user_custom.html");
                              usercustom_html = util.format(data);

                              var t = S(template).replace('[[usercustom_html]]', usercustom_html).s;
                              template = t;

                              fs.unlink(destFile, function(err){

                                console.log("- deleted old " + destFile);

                                fs.writeFile(destFile, template , function(err) {
                                    if(err) {
                                        return console.log(err);
                                    }

                                    console.log("- new " + destFile + " was generated");
                                });

                              });
                          });
                      });
                  });
              });
          });
      });
  });
});
