$(function(){
//ѡ��ߴ�	
	$('.size li a').click(function(){
		$('.size a').removeClass('selected');
		$('.size-tips').html(" ");
		$(this).addClass('selected');
		var info=$(this).html();
		$('.size-tips').html('��ѡ��ĳߴ���:'+'<span class="info">'+info+'</span>')
		
		return false;
	})
})

//��������
$('.increase_btn').click(function(){
	incre();
})
// ��������
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
			_val=parseInt($('.shop_tx').val());//���¸�ֵ
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
		_val=parseInt($('.shop_tx').val());//���¸�ֵ
	}else{
		_val--;
	}
	
	$('.shop_tx').val(_val);
}

function RepNumber(obj) {
	var reg = /^[\d]+$/g;
	if (!reg.test(obj.value)) {
	var txt = obj.value;
	txt.replace(/[^0-9]+/, function (char, index, val) {//ƥ���һ�η������ַ�
	obj.value = val.replace(/\D/g, "");//���������ַ��滻��""
	var rtextRange = null;
	if (obj.setSelectionRange) {
	obj.setSelectionRange(index, index);
	} else {//֧��ie
	rtextRange = obj.createTextRange();
	rtextRange.moveStart('character', index);
	rtextRange.collapse(true);
	rtextRange.select();
	}
	})
	}
}




//�滻�Ƿ��ַ�
$(".shop_tx").keyup(function(){
	RepNumber(this)
	
})
//��ֹ����ճ��
$(".shop_tx").bind("copy cut paste",function(e){
   return false;
})
     

//iframe����Ӧ�ֻ�
window.onload = window.onresize = function () {
    resizeIframe();
}
var resizeIframe=function(){
    var bodyw=document.body.clientWidth;
	if(document.getElementsByTagName("iframe")[0]){
        document.getElementsByTagName("iframe")[0].height = bodyw*9/16;//�趨�߶�
		if(parseInt(document.getElementsByTagName("iframe")[0].height)>650){
		document.getElementsByTagName("iframe")[0].height=650+'px'
	}
   
	}
	
}




//
















