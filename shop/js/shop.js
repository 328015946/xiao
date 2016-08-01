$(function(){
//选择尺寸	
	$('.size li a').click(function(){
		$('.size a').removeClass('selected');
		$('.size-tips').html(" ");
		$(this).addClass('selected');
		var info=$(this).html();
		$('.size-tips').html('你选择的尺寸是:'+'<span class="info">'+info+'</span>')
		
		return false;
	})
})

//数量增减
$('.increase_btn').click(function(){
	incre();
})
// 数量减少
$('.decrease_btn').click(function(){
	decre();
})

function incre(){
	
	var _val=parseInt($('.shop_tx').val());
		_val++;

		if(_val==1){
			$('.decrease_btn').addClass('disable')
		}else if($('.shop_tx').val()==""){
			
			$('.shop_tx').val(1);
			_val=parseInt($('.shop_tx').val());//重新赋值
		}else{
			
			$('.decrease_btn').removeClass('disable')
		}
		$('.shop_tx').val(_val);
		return false;	
}


function decre(){
	var _val=parseInt($('.shop_tx').val());
	
	if(_val==1){
		$('.decrease_btn').addClass('disable')
			return false;	
	}else if($('.shop_tx').val()==""){
		
		$('.shop_tx').val(1);
		_val=parseInt($('.shop_tx').val());//重新赋值
	}else{
		_val--;
	}
	
	$('.shop_tx').val(_val);
}

function RepNumber(obj) {
	var reg = /^[\d]+$/g;
	if (!reg.test(obj.value)) {
	var txt = obj.value;
	txt.replace(/[^0-9]+/, function (char, index, val) {//匹配第一次非数字字符
	obj.value = val.replace(/\D/g, "");//将非数字字符替换成""
	var rtextRange = null;
	if (obj.setSelectionRange) {
	obj.setSelectionRange(index, index);
	} else {//支持ie
	rtextRange = obj.createTextRange();
	rtextRange.moveStart('character', index);
	rtextRange.collapse(true);
	rtextRange.select();
	}
	})
	}
}




//替换非法字符
$(".shop_tx").keyup(function(){
	RepNumber(this)
	
})
//阻止复制粘贴
$(".shop_tx").bind("copy cut paste",function(e){
   return false;
})
     

//iframe自适应手机
window.onload = window.onresize = function () {
    resizeIframe();
}
var resizeIframe=function(){
    var bodyw=document.body.clientWidth;
	if(document.getElementsByTagName("iframe")[0]){
        document.getElementsByTagName("iframe")[0].height = bodyw*9/16;//设定高度
		if(parseInt(document.getElementsByTagName("iframe")[0].height)>650){
		document.getElementsByTagName("iframe")[0].height=650+'px'
	}
   
	}
	
}




//
















