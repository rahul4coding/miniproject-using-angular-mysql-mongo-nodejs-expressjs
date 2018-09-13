var express = require('express');

var prop = require('../config/db_properties');

var mongodb = require('mongodb');

var rkb = mongodb.MongoClient;

var router = express.Router();

//create the rest api

router.post("/", function(req,res){
    var token = req.body.token;

    //compare tokens
    if(token==prop.token){
        //fetch data from mongo database
        rkb.connect("mongodb://localhost:27017/miniproject",function(err,db){
            db.collection("products").find().toArray(function(err,array){
                res.send(array);
            });
        });

    }else{
        res.send("unjauthorised user..!");
    }
});

//export module

module.exports = router;