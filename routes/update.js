var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var con = mysql.createConnection({

		host:'localhost', //主机
		port:'8889', //断口号
		user:'root', //用户名
		password:'root', //密码
		database:'baidunews' //数据库的名字
	}); 
con.connect();


router.post('/uppMessage',function(req,res,next){
	var id=req.body.id;
	
	con.query(`SELECT * FROM news WHERE id=?`,id,function(err,results,f){
		// console.log(results);
		if(err){
			console.log('没有数据');
		}
		res.send({state:'ok',results:results})
		// console.log(1000)
	})

})

router.post('/updatemess',function(req,res,next){
	var id=req.body.id;
	console.log(req.body.id)
	// console.log(title)
	// cnsole.log(content)
	var title = req.body.title;
	var content=req.body.content;
	var img=req.body.img;
	var src=req.body.src;
	var date = req.body.date;
	var tag=req.body.tag;id
	
	
	con.query("UPDATE news SET title=?,content=?,img=?,src=?,date=?,tag=? WHERE id=?",[title,content,img,src,date,tag,id],function(err,results,f){
		 	// console.log(req.body.id)
		 	if(err){
		 		console.log('没有数据');
		 	}
		 	res.send({state:'ok',message:"改写一条信息"})
		 	
		 })

})


module.exports = router;
