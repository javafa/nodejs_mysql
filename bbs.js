var dao = require("./bbsDao");
var error = require("./error");
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
// 업데이터는 write와 동작방식이 유사하다
exports.update = function(request, response){
    // 요청한 데이터를 담을 변수를 선언
    var postdata = "";
    request.on('data', function(data){ // 데이터가 버퍼에 가득차면 자동으로 호출
        postdata = postdata + data;
    });
    request.on('end', function(){ // 데이터를 다 읽었을 때 호출
        var dataObj = JSON.parse(postdata);
        // dataObj = {
        //     id : 10,
        //     title : "수정된 제목",
        //     content : "수정된 내용 내용 \n 내용내용내ㅛㅇㅇ",
        //     author : "펀치넬로",
        //     date : "2017-07-24"
        // }
        dao.update(dataObj, function(err){
            if(err){
                error.send(response, 500);
            }else{
                send(response, '{"result":"ok"}');
            }
        });
    });
}
exports.delete = function(response){
    send(response, "DELTE");
}

function send(response, result){
    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(result);
}