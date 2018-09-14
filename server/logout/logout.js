var express = require('express');

var prop =  require('../config/db_properties');

var router = express.Router();

//rest api

router.post("/", function(req,res){
    var token = req.body.token;

    //compare client token woth server token

    if(token == prop.token){
        prop.token="";
        res.send("token deleted"); 
    }
    else{
        res.send("Error");
    }
    
})

module.exports = router;