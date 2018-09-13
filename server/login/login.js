//import expres
var express =require("express");

//import db_connection
var conn = require("../config/db_connection");
var connection = conn.getConnection();
//connect to database
connection.connect();

var prop = require("../config/db_properties");

//create router instance

var router = express.Router();
var token = require("../token/token");

//create rest api

router.post("/", function(req,res){
    //read the data coming from angular
    var uname = req.body.uname;
var upwd = req.body.upwd;

//compare  angular data with database data. for this chutiyapa we need query :)

connection.query("select *from login_details where uname='"+uname+"' and upwd='"+upwd+"'", function(err, recordsArray, fields){
    if(recordsArray.length>0){
        var my_token = token({
            'uname':uname,
            'upwd':upwd
        }, 'hr@nareshit.in')

        prop.token=my_token;
        res.send({'login':'success', 'token':'my_token'});
    }else{
        res.send({'login':'failure'})
    }
});


});

//export the module

module.export = router;