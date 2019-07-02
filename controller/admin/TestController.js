var testService = require('../../service/TestService');
var common = require("../../common/common");

module.exports  = {

    query(req, res, next){
        testService.query(req.body).then(data => {
            res.json({code:1 ,msg:'查询成功',data:{lists:data}});
        });
    },
    insert(req, res, next){
        testService.insert().then(data => {
            res.json({code:1 ,msg:'插入成功',data:{lists:data}});
        })
    }
}