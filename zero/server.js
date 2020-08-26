var http = require('http');
var url = require('url');
var fs = require('fs');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var query = url.parse(_url, true).query; //GET
    var title = query.name;

    // console.log(_url)
    if (_url == '/')  {
        title = "Welcome"
        // console.log(__dirname);
    }
    if (_url == '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;

    }
    response.writeHead(200);

    var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        <li><a href="/?name=HTML">HTML</a></li>
        <li><a href="/?name=CSS">CSS</a></li>
        <li><a href="/?name=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p>The World Wide Web (abbreviated WWW or the Web) is an information space where documents and other web resources are identified by Uniform Resource Locators (URLs), interlinked by hypertext links, and can be accessed via the Internet.[1] English scientist Tim Berners-Lee invented the World Wide Web in 1989. He wrote the first web browser computer program in 1990 while employed at CERN in Switzerland.[2][3] The Web browser was released outside of CERN in 1991, first to other research institutions starting in January 1991 and to the general public on the Internet in August 1991.
      </p>
    </body>
    </html>
    `;
    response.end(template);
    //  readFileSync : 경로에 해당 하는 파일을 읽어 가져온다.
    // response.end : 사용자에게 전송할 데이터 생성
});
app.listen(3000);