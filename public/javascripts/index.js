window.onload=function(){
	var oMenu=document.querySelector('#menu');
	oMenu.addEventListener('touchstart',function (ev){
		var oldX=ev.targetTouches[0].pageX-oMenu.offsetLeft;
		function fnMove(ev){
			var x=ev.targetTouches[0].pageX-oldX;
			if(x>=17){
				oMenu.style.marginLeft=17+'px';
				// 左边距离当等于或者大于ul的margin
			}
			else if(x<-(1719-document.body.clientWidth+62) ){
				oMenu.style.marginLeft=-(1719-document.body.clientWidth+62)+'px';
				// 获取ul的宽度减去可视区宽度加上ul左右margin,判断当移动到最右侧时的左边距
			}
			else{oMenu.style.marginLeft=x+'px';}
		}
		document.addEventListener('touchmove',fnMove,false);
		document.addEventListener('touchend',function (){
			document.removeEventListener('touchmove',fnMove,false);
		},false);
	},false);

	new Swiper('.swiper-container',{
	loop:true, 							//无限循环/无缝滚动
	spaceBetween:10,					//间距
	// prevButton:'.swiper-button-prev',	//上一个
	// nextButton:'.swiper-button-next',	//下一个
	pagination:'.swiper-pagination',	//生成小圆点
	paginationClickable:true,			//小圆点可点击
	autoplay:1000, 						//自动播放
	autoplayDisableOnInteraction:true//点击停止一下播放
    });
	
	 
    function getMsg(){
    	// e.preventDefault();
    	// console.log(11);
    	$.ajax({
    		url:'/getLists',
    		type:'get',
    		success:function(data){
    			var arr = data.results;
    			$.each(arr,function(index,ele) {
    				// console.log(ele.tag)
    				if(ele.tag=="推荐"){
    					$(`<div class="clearFix"><img src=${ele.img}/><h5>${ele.title}</h5><span >${ele.date}</span><span class="span">${ele.src}</span></div>`).appendTo($('.newslist'));
    				}
    			})	
    		},
    		error:function(err){
    			console.log(1);
    		}
    	})
    }
    getMsg();
      // 默认显示信息
    $('.navv').click(function(e){
      	 
      	e.preventDefault();
      	$('.navv').removeClass('select');
      	$(this).addClass('select');

      	var btn=$(this).html();
      	$.ajax({
      		url:'/change',
      		type:'get',
      		success:function(data){
    			var arr = data.results;
    		    $('.newslist').html('');
    			arr.forEach(function(ele,index){   
    			 		// console.log(arr);
    			// console.log(ele.tag)
    			 		
    				if(ele.tag==btn){
    					
    					$(`<div class="clearFix"><img src=${ele.img}/><h5>${ele.title}</h5><span >${ele.date}</span><span class="span">${ele.src}</span></div>`).appendTo($('.newslist'));
    				 
    				 if(ele.tag=="娱乐"){
    				 	$('.newslist').html('');
    				 	 $(`<h4 class="yangzi">杨紫美图,美图杨紫</h4>`).appendTo($('.newslist'));
    				 	arr.forEach(function(ele,index){
    				 	 if(ele.tag=="娱乐"){ 
    				 	
    				 
    				 	$(`<img src=${ele.img} class="picyz"/>`).appendTo($('.newslist'));
    				 }
                      })
    				 }
    				}

        //         // window.location.reload();
            })	
    		},
    		error:function(err){
    			console.log(err);
    		}

    	})
      })
  
    

}

