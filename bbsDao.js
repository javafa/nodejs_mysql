var database = require("./module/database");
var tableName = "board";

exports.select = function(){
    var query = "select * from "+tableName+" ";
}

exports.insert = function(callback){
    console.log("in bbsDao insert");
    var query = " insert into "+tableName+"(title,content,author,`date`)";
        query = query + " VALUES ?";
    var values = [
        ['제목','내용','작성자','2017-07-21']
    ];
    database.executeMulti(query, values, function(){
        callback();
    });
}

exports.update = function(){
    var query = "update "+tableName+" ";
}

exports.delete = function(){
    var query = "delete from "+tableName+" ";
}