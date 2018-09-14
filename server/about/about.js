//import express

var express = require("express");

// impoert db_Connection

var conn = require("../config/db_connection");

var connection = conn.getConnection();

connection.connect();  //connect with database;

// import  db_properties

var prop = require("../config/db_properties");

//router instance

var router = express.Router();

//rest api

router.post("/", function(req,res){
    var token =req.body.token;

    //compare client token with server token

    if(token==prop.token){
        //fetch data from mysql database miniproject for this we need query

        connection.query("select *from products", function(err,recordsArray,fields){
            res.send(recordsArray);
        });

    }else{
        res.send("unauthorised user..!");
    };
});

module.exports = router;