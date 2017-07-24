var dao = require("./bbsDao");
exports.read = function(response){
    dao.select(function(data){ // dao를 통해 db를 읽고난 후 결과셋을 처리하는 코드
        var jsonString = JSON.stringify(data);
        send(response, jsonString);
    });
}
exports.write = function(request, response){
    console.log("in bbs write");
    // 데이터를 꺼내자
    var postdata = "";
    request.on('data', function(data){ // 데이터를 읽을 수 있을 때 호출
        postdata = postdata + data;
    });
    request.on('end', function(){ // 데이터를 다 읽었을 때 호출
        var dataObj = JSON.parse(postdata);
        dao.insert(dataObj, function(){
            send(response, '{"result":"ok"}');
        });
    });
}
exports.update = function(response){
    send(response, "UPDATE");
}
exports.delete = function(response){
    send(response, "DELTE");
}

function send(response, result){
    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(result);
}