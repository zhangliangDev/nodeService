module.exports = {
    //递归函数
    parentChildren(result,pid){
        let arr = [];
        for(let i in result) {
            if(result[i].pid == pid) {
                result[i].children = parentChildren(result, result[i].pid);
                arr.push(result[i]);
            }
        }
        return arr;
    },
    //获取ip地址
    getClientIp(req) {
        return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    },
    //唯一表示
    getUuid() {
        return Math.floor(Math.random() * 100000000 + 10000000).toString();
    },

    string4(){
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    },
    getSUUID(){
        return this.string4()+this.string4()+this.string4()+this.string4();
    }

}