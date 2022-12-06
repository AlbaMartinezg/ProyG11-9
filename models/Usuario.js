const mongoose = require ("mongoose");
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    name: String,
    email:String,
    password:String,
    role:String
})

module.exports = mongoose.model("UsuarioSchema", Clientschema);