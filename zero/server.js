var http = require('http');
var url = require('url');
var fs = require('fs');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var query = url.parse(_url, true).query; //GET

    // console.log(_url)
    if (_url == '/')  {
        _url = '/index.html';
        // console.log(__dirname);
    }
    if (_url == '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;

    }
    response.writeHead(200);
    console.log(__dirname+ _url);
    // console.log(process.env.PATH);

    if(query.name)
        response.end(fs.readFileSync( __dirname+'/'+query.name));
    else
        response.end(fs.readFileSync( __dirname+'/'+_url));
    //  readFileSync : 경로에 해당 하는 파일을 읽어 가져온다.
    // response.end : 사용자에게 전송할 데이터 생성
});
app.listen(3000);