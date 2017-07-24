var database = require("./module/database");
var tableName = "board";

exports.select = function(callback){
    var query = "select * from "+tableName+" ";
    database.executeQuery(query, callback);
}

exports.insert = function(data, callback){
    console.log("in bbsDao insert");
    var query = " insert into "+tableName+"(title,content,author,date)";
        query = query + " VALUES ?";
    var values = [data.title,data.content,data.author,data.date];
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