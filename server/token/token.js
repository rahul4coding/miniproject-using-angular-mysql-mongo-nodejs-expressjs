//import jwt simple
var jwt = require("jwt-simple");

//export function
module.exports = function(obj, password){
    return jwt.encode(obj,password)
};