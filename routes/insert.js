
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

//插入数据
router.post('/inserUser',function(req,res,next){

	var title = req.body.title;
	var content=req.body.content;
	var img=req.body.img;
	var src=req.body.src;
	var date = req.body.date;
	var tag=req.body.tag;

	var sql = `INSERT INTO news (title,content,img,src,date,tag) VALUES ("${title}","${content}","${img}","${src}","${date}","${tag}")`;

	// var sql = "INSERT INTO `user`( `name`, `age`, `fav`) VALUES (?,?,?)"
	console.log(sql);
	con.query(sql,function(err,results,f){
		con.query("SELECT * FROM `news`",function(err,results,f){
			// console.log(results);
			if(err){
				console.log('没有数据');
			}
		// console.log(results[0].id);
		res.send({results:results})
	})//插入数据后再查询数据,并返回给前端数据
		// res.send({state:'ok',message:'恭喜你插入成功'})
        //为什么这里不能再用send

    })
	

})
module.exports = router;