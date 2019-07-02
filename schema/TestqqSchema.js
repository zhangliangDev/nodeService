var mongoose = require("../config/mongoDb");

var Schema = mongoose.Schema;

var TestqqSchema = new Schema({
    c:{ type: String },
    d:{ type: String }
});

const testqq = mongoose.model('Testqq',TestqqSchema,'testqq');

module.exports = testqq;