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
// con.connect();
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/getLists',function(req,res,next){
  // 读取数据  从数据库中来
  
   

  console.log(50);
  var sql = "SELECT * FROM `news`";
  con.query(sql,function(err,results,f){
    console.log(results);
    if(err){
      console.log('没有数据');
    }
    console.log(results[0].id);
    res.send({state:'ok',results:results})
    // res.render('admin',{state:'ok',data:results});
  })
   

})
router.get('/change',function(req,res,next){
  // 读取数据  从数据库中来
  
   

  console.log(50);
  var sql = "SELECT * FROM `news`";
  con.query(sql,function(err,results,f){
    console.log(results);
    if(err){
      console.log('没有数据');
    }
    console.log(results[0].id);
    res.send({state:'ok',results:results})
    // res.render('admin',{state:'ok',data:results});
  })
  con.end();

})
module.exports = router;