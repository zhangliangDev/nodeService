var mysql = require('mysql');
var config = require('./config.base')

var pool  = mysql.createPool({
  host     : config.database.HOST,
  user     : config.database.USERNAME,
  password : config.database.PASSWORD,
  database : config.database.DATABASE
});

//导出查询相关  
let query = function( sql, values) {
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        console.error("get mysql pool connection error: %s", err.message);
        resolve( err )
      } else {
        console.log("sql",sql);
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
		  //释放连接  
          connection.release()
        })
      }
    })
  })
}
module.exports = query;    