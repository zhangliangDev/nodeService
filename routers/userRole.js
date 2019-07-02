var express = require('express') //路由信息

var testController = require('../controller/admin/TestController') 
const router = express.Router();



router.post('/test',testController.query); 
router.post('/insert',testController.insert); 



module.exports = router