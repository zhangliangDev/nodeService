var UserModel = require("../schema/UserSchema");

const query = (params => {
    return new Promise(( resolve, reject ) => {
        // let arr = ["%"+params.user_name+"%",page,params.size];
        var param = {
            user_name: params.user_name
        }
        console.log(param);
        UserModel.find(param,function(err, docs){
            console.log('查询结果：' + docs);
            if(err) console.log(err);
            if(!docs){
                reject( err )
            }else{
                resolve({data:docs});
            }
        })
       
    })
    
});

const insert = (params => {
    return new Promise(( resolve, reject ) => {
        let arr = ["%"+params.user_name+"%",page,params.size];
        var User = new UserModel({
            user_name: "qwer",
            password: "qwer",
            id:5

        });
        User.save(function(err, docs){
            console.log('查询结果：' + docs);
            if(err) console.log(err);
            if(!docs){
                reject( err )
            }else{
                resolve({data:docs});
            }
        })
        
    });
});
module.exports = {
    query,
    insert
};