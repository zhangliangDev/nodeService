const redis = require("redis");
const redisConfig = require("./config.redis");

const __createClient = () => {
    const client = redis.createClient(redisConfig.port, redisConfig.host, redisConfig.opts);
    //记录redis错误
    client.on("error", function (err) {
        logger("redis error: " + err);
    });
    return client;
};

const client = __createClient();
client.on('ready',function(err){
    console.log('redis ready');
});
module.exports = {
    set(key, value, time){
        client.set(key, value, redis.print)
        client.expire(key, time);
    },
    getClient(){
        return client;
    }
}
