var config = {
	database: {   //数据库信息
		DATABASE: 'test',
		USERNAME: 'test1',
		PASSWORD: 'test1',
		PORT: '17017',
		HOST: '10.10.11.99'
    },
    dbUrl: function(){
		return "mongodb://"+this.database.USERNAME+":"+this.database.PASSWORD+"@"+this.database.HOST+":"+this.database.PORT+"/"+this.database.DATABASE+"?authSource="+this.database.DATABASE;
	}
    
}



module.exports = config;