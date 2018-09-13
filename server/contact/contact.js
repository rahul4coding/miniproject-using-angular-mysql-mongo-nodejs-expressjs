var express = require('express');

//import fs

var fs = require('fs');

var prop = require('../config/db_properties');

//rrouter instance

var router = express.Router();

//rest api

router.post("/", function(req,res){
    var token = req.body.token;

    if(token==prop.token){
        fs.readFile("C:/Users/hp/angular6/miniproject/static/sample.json",function(err,data){
            res.send(data);
        });
    }else{
        res.send("unauthorised user..!");
    }
});

module.exports = router;