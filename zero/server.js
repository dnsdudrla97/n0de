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
    fs.readFile(__dirname+`/data/${query.name}`, 'utf8', (err, data) => {
        if (err) throw err;
        console.log("true");

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
          <p>${data}</p>
        </body>
        </html>
        `;
        response.end(template);
    });

});
app.listen(3000);

    //  readFileSync : 경로에 해당 하는 파일을 읽어 가져온다.
    // response.end : 사용자에게 전송할 데이터 생성
