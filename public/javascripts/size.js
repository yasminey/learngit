;(function (win,doc){
	function changeSize(){
		doc.documentElement.style.fontSize=doc.documentElement.clientWidth/320*100+'px';
	}
	changeSize();
	win.addEventListener('resize',changeSize,false);
})(window,document);