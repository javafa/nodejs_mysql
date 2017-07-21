// 1. 서버모듈
var http = require("http");
// 2. 서버를 생성
var server = http.createServer(function(request,response){
    requestParser(request, response);
});
// 3. 서버를 시작
server.listen(80, function(){
    console.log("server's running...");
});
// 요청분석
function requestParser(request, response){
    console.log(request.url);
    if(request.url == "/hello"){
        sendResponse(response)
    }else{
        send404(response);
    }
}
// 응답처리
function sendResponse(response){
    response.writeHead(200,{'Content-Type':'text/html'});
    for(i=0; i<10 ; i++){
        response.write( i+"<br/>");
    }
    response.end("Hello");
}
// 오류처리
function send404(response){
    response.writeHead(404,{'Content-Type':'text/html'});
    response.end("404 Page Not Found");
}