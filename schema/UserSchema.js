var mongoose = require("../config/mongoDb");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id : { type: String },
    user_name: {type: String},
    password : { type: String}                      
    }, { versionKey: false });//去掉版本控制

const User = mongoose.model('user',UserSchema,'user');

module.exports = User;