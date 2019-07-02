var userRole = require('./userRole')  //用户

module.exports = app => {
      
    app.use('/userRole', userRole);
}

