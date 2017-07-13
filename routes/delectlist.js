var express = require('express');
var router = express.Router();
var mysql = require('mysql');
// var bootstrap=require('bootstrap');

/* GET home page. */


var con = mysql.createConnection({

		host:'localhost', //主机
		port:'8889', //断口号
		user:'root', //用户名
		password:'root', //密码
		database:'baidunews' //数据库的名字
	}); 
con.connect();

router.post('/deleteOne',function(req,res,net){

	var id=req.body.id;
	// console.log(id) 
	con.query(`DELETE FROM news WHERE id=?`,id,function(err,results,f){
		
		if(err){
			console.log('没有数据');
		}
		res.send({state:'ok',message:'成功删除一条信息'});
            // console.log("aaaa")
        })
})


module.exports = router;
