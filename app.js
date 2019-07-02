var express = require('express')
var session = require('express-session');  //session的持久化模块
var bodyParser = require('body-parser');
var router = require('./routes/index') //路由信息
var config = require('./config/config.base') //基础信息
var redisServer = require('./config/redis') //基础信息
var app = express();



app.use(express.static('./static'));  //负责托管静态资源


app.use(bodyParser.json());	 // 解析 application/json
app.use(bodyParser.urlencoded({ extended: false })); //解析 application/x-www-form-urlencoded

// app.use(session({
// 	secret: 'secret', //为了安全性的考虑设置secret属性
// 	cookie: {maxAge: 60 * 1000 * 30}, //设置过期时间
// 	resave: true, // 即使 session 没有被修改，也保存 session 值，默认为 true
// 	saveUninitialized: false, //
// }));

//执行全局路由信息配置， 这个支持跨域
app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", '*');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  	res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
	  	res.send(200);
	} else {
	    next();
	}
});

app.use(function (err, req, res, next) {
	
	res.json({status:1 ,msg:err})
});

// 登录过滤器
app.use(function (req, res, next) {
	var url = req.originalUrl;//获取浏览器中当前访问的nodejs路由地址；
	var token = req.headers['x-access-token'];
	var constatnKey = "nodeTest";
	
	var le = 1;
	if(url=='/userRole/login'){ //通过判断控制用户登录后不能访问登录页面；
		next();
	}else{
		
		redisServer.getClient().get(token,function(err, data){
			le = data;
			// redis.set(constatnKey+token);
			if(le==null){ //通过判断控制用户登录后不能访问登录页面；
				return res.json("{code:-1,mes:'未登录'}");
				// return res.redirect('/login.html');//页面重定向；
			}
			next();
		});
	}
});
router(app);

var server = app.listen(config.port,"localhost", function () {
    
     var host = server.address().address;
	 var port = server.address().port;
	 console.log(host+"----"+port);
     console.log("应用实例，访问地址为 http://%s:%s", host, port)    
})