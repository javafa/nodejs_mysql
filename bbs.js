var dao = require("./bbsDao");
exports.read = function(response){
    send(response, "READ");
}
exports.write = function(response){
    console.log("in bbs write");
    dao.insert(function(){
        send(response, "WRITE Success!");
    });
}
exports.update = function(response){
    send(response, "UPDATE");
}
exports.delete = function(response){
    send(response, "DELTE");
}

function send(response, flag){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end("BBS "+flag);
}