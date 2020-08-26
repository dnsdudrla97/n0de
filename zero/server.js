var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request, response) {
    var url = request.url;
    // console.log(url)
    if (url == '/')  {
        url = '/index.html';
        // console.log(__dirname);
    }
    if (url == '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;

    }
    response.writeHead(200);
    console.log(__dirname+ url);
    // console.log(process.env.PATH);
    
    response.end(fs.readFileSync( __dirname+'/'+url));
    //  readFileSync : 경로에 해당 하는 파일을 읽어 가져온다.
    // response.end : 사용자에게 전송할 데이터 생성
});
app.listen(3000);