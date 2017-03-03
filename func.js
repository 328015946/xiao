//xiao.js 仿jquery  写于2015年  封装js常用函数
//这个修改于2016年12月23
//修改修改
function Xiao(any){
  
  this.elements=[];
 
   switch(typeof any){
       case "function":
	   addevent(window,"load",any);
	   break;
	   case "string":
	    switch(any.charAt(0)){
		  case "#":
		  var obj=document.getElementById(any.substring(1));
		  this.elements.push(obj);
		   break;
		   case ".":
		   this.elements=getclass(document,any.substring(1));
		   break;
		   default:
		   var objs=document.getElementsByTagName(any);
		   this.elements=objs;
		}
		break;
		case 'object':
		this.elements.push(any);
		break;
	   
      
   }


};

//获取class元素;
function getclass(parent,classname){
  var all=parent.getElementsByTagName("*");
  var ayy=[];
  for(var i=0;i<all.length;i++){
   
  if(all[i].className==classname){
     ayy.push(all[i]);
	 
   }
  }
   return ayy;
}

//获取外部样式；
function getstyle(element, attr) {
  var value;
  if (typeof window.getComputedStyle != 'undefined') {//W3C
    value = window.getComputedStyle(element, null)[attr];
  } else if (typeof element.currentStyle != 'undeinfed') {//IE
    value = element.currentStyle[attr];
  }
  return value;
}

//添加事件;
function addevent(obj,type,fn){
  if(obj.attachEvent){
    obj.attachEvent('on'+type,function(){
	if(false==fn.call(obj)){
	     event.cancelBubble = true;//ie阻止冒泡
	     return false;//阻止默认事件
	}
	     //调用函数 return false为阻止默认和冒泡
	});
  }else{
  
   obj.addEventListener(type,function(e){
     //阻止默认事件
     if(false==fn.call(obj)){
	     e.stopPropagation(); //w3c
	      e.preventDefault();//w3c阻止默认事件
	  }
   
   },false);
  }

}
//计数器函数；
function clickcount(obj){

  var  counts=0;
       addevent(obj)
}

//绑定点击事件；
Xiao.prototype.click=function(fn){
  for(var i=0;i<this.elements.length;i++){
  
     addevent(this.elements[i],"click",fn);
  } 
  
};
// 设置获取attr；
Xiao.prototype.attr=function(attr1,value){
 
   if(arguments.length==2){
  for(var i=0;i<this.elements.length;i++){
     
     this.elements[i][attr1]=value;    
    } 
  }else{
     return this.elements[0][attr1];
  }
  
}

//css设置；
Xiao.prototype.css=function(attr,value){
 
   if(arguments.length==2){
  for(var i=0;i<this.elements.length;i++){
     
     this.elements[i].style[attr]=value;    
    } 
  }else{
    //当参数为字符串的时候；
    if(typeof attr=="string"){
     return getstyle(this.elements[0],attr);
	   }else{
	       for(var i=0;i<this.elements.length;i++){
		     //设置css参数为对象的情况
		      var k="";
			  for(k in attr){
			   
			    this.elements[i].style[k]=attr[k];
			  }
		   }
     
	        
	   } 
	 
	 
  }
  return this;
}
//show方法；
Xiao.prototype.show=function(){
  for(var i=0;i<this.elements.length;i++){
     
     this.elements[i].style.display="block";    
  } 

}
//hide方法
Xiao.prototype.hide=function(){
  for(var i=0;i<this.elements.length;i++){
     
     this.elements[i].style.display="none";    
  } 

};
//hover方法；
Xiao.prototype.hover=function(fn,fn1){
  for(var i=0;i<this.elements.length;i++){
     addevent(this.elements[i],"mouseover",fn);
     addevent(this.elements[i],"mouseout",fn1);
      
  } 

}

//toggle方法；
Xiao.prototype.toggle=function(){

  for(var i=0;i<this.elements.length;i++){
      var _arguments=arguments;
      (function(obj){
	    var count=0;
	      
		  addevent(obj,"click",function(){
		   _arguments[count%_arguments.length].call(obj);
		   count++;
		  
		  })
	  
	  })(this.elements[i]);
  } 

};
//eq方法；
Xiao.prototype.eq=function(num){
 return $(this.elements[num]);
};

//合并dom集合到数组函数；
function apparray(arr1,arrdom){
 for (var i=0;i<arrdom.length;i++){
 arr1.push(arrdom[i]);
 
 }
}

//find方法；
Xiao.prototype.find=function(str){
   var result=[];
    for(var i=0;i<this.elements.length;i++){
	        switch(str.charAt(0)){
			 
			  case ".":
			  var cresult=getclass(this.elements[i],str.substring(1));
			  result=result.concat(cresult);
			  
			  break;
			  default:
			  var arrdom=this.elements[i].getElementsByTagName(str);
			  apparray(result,arrdom);
			
			}
	}
	//重新new个xiao对象
	var newxiao=$();
	//重新设置elements集合
	newxiao.elements=result;
	//返回集合;
	return newxiao;
	}
function $(any){
  return new Xiao(any);
}

function getindex(obj){
 var childlist=obj.parentNode.children;
 for(var i=0;i<childlist.length;i++){
     
   if(childlist[i]==obj){
      return i;
   }
 }

}
//index方法；
Xiao.prototype.index=function(){
     
   return getindex(this.elements[0]);

}
//bind方法
Xiao.prototype.bind=function(eventname,fn){
 for(var i=0;i<this.elements.length;i++){
   addevent(this.elements[i],eventname,fn);
 
 }

}//
//模仿size方法
Xiao.prototype.size=function(){
  
    return this.elements.length;
 }
 //animate动画
Xiao.prototype.animate=function(josn){
  for(var i=0;i<this.elements.length;i++){
     
	 
 
 }
 }

//插件机制
Xiao.prototype.extend=function(name,fn){

Xiao.prototype[name]=fn;

}
//拖拽
$().extend("drap",function(){
	
for(var i=0;i<this.elements.length;i++){
	
	drap(this.elements[i]);
	
}
    function drap(oBox){//记得元素设置position；
    // 容器鼠标按下事件
    oBox.onmousedown = function (e){
        var e = e || window.event;
        disX = e.clientX - this.offsetLeft;//重叠部分
        disY = e.clientY - this.offsetTop;
        document.onmousemove = function (e){
            var e = e || window.event;
			var L=e.clientX - disX;
			var T=e.clientY - disY;
			if(L<0){
				
				L=0;
			}else if(L>document.documentElement.clientWidth-oBox.offsetWidth){
				
				L=document.documentElement.clientWidth-oBox.offsetWidth;
			} if(T<0){
				
				T=0;
			}else if(T>document.documentElement.clientHeight-oBox.offsetHeight){
				
				T=document.documentElement.clientHeight-oBox.offsetHeight;
			}
            oBox.style.left = L+ 'px';//鼠标移动距离减去
            oBox.style.top = T+ 'px';
        };
        document.onmouseup = function (){
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return false;
    };
	}
})

//结束xiao对象;
//


//封装常用函数;创建2015 9月


//验证邮箱格式；
function ischeckemail(email){
  if (email != "") {

     var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

     var isok= reg.test(email);

     return isok;
}}

//去除空白;
function trim(str)
{
    return str.replace(/(^\s*)|(\s*$)/g,"");//将字符串前后空格,用空字符串替代。
}

//返回单选框value
function getRadioValue(radioName){
  var obj=document.getElementsByName(radioName);
for(var i=0;i<obj.length;i++){
   if(obj[i].checked){
    return obj[i].value;
   }
}
}

//全选、全不选,反选
 function checkAll(form, sel) {
for (i = 0, n = form.elements.length; i < n; i++) {
   if(form.elements[i].type == "checkbox") {
    if(form.elements[i].checked == true) {
     form.elements[i].checked = (sel == "all" ? true : false);
    } else {
     form.elements[i].checked = (sel == "none" ? false : true);
    }
   }
}
} 

//字符串原型扩展替换方法 用于去除中间空白或者替换指定字符    参数一:要替换的字符；参数二：替换成什么；
String.prototype.replaceAll = function (AFindText,ARepText){
                raRegExp = new RegExp(AFindText,"g");
                return this.replace(raRegExp,ARepText);
}

//允许文本框输入字数 第三个参数是剩余字数的元素id
function check_input_Length(domobj,charlength,id){
	
	var maxChars =charlength;
	if (domobj.value.length > maxChars)
	   domobj.value = domobj.value.substring(0,maxChars);
	   var curr = maxChars - domobj.value.length;
	   document.getElementById(id).innerHTML = curr.toString();
}

//inArray方法封装
function inArray(arr,value){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === value){
      return true;
    }
  }
  return false;
}
//移除class 注意边界 \b 如class="box red" 就不包括 box 应该用正则
//判断元素是否有某个class
  function hasClass(elem, cls) {
   var cls = cls || '';
    if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}

//添加class 
 function addClass(obj, cls) {  
  if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
} 


function removeClass(obj, cls) {  
      if (hasClass(obj, cls)) {  
          var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
          obj.className = obj.className.replace(reg, ' ');  
        }  
    } 

//ajax缓存问题解决方法：
//www.baidu.com？=时间戳 这样每次请求都不一样的地址了 缓存解决
//ajax数组传递的也是字符串 
//ajax封装
function ajax(type,url,fn) {

           //先声明一个异步请求对象
           var xmlHttpReg = null;
           if (window.ActiveXObject) {//如果是IE js重要特性 属性判断不出差，变量会报错

              xmlHttpReg = new ActiveXObject("Microsoft.XMLHTTP");
 
           } else if (window.XMLHttpRequest) {

               xmlHttpReg = new XMLHttpRequest(); //实例化一个xmlHttpReg
           }
           //如果实例化成功,就调用open()方法,就开始准备向服务器发送请求
           if (xmlHttpReg != null) {
               xmlHttpReg.open(type, url, true);
               xmlHttpReg.send(null);

         }
           //回调函数
          
		   if (xmlHttpReg.readyState == 4) {//4代表执行完成
                  if (xmlHttpReg.status == 200) {//200代表执行成功
                       fn(xmlHttpReg.responseText);//把返回的文本作为参数传给回调函数
                      }
           }
    }

//随滚动位置不变 会闪烁，原因是频换改变位置 ，设置成运动
//运动注意小数取整
//math.abs 最后让物体位置等于目标位置

//运动

//获取外部css文件属性
function getstyle(obj,attr){
	
	if(obj.currentStyle){
		return obj.currentStyle[attr];
		
	}else{
		
		return getComputedStyle(obj,false)[attr];
	}
}
//缓冲运动函数 元素 目标点
function startmove(obj,attr,itarget,fn){//透明度传参用0到100正整数
 clearInterval(obj.timer);//防止重复点击加快速度
   obj.timer=setInterval(function(){
	   var icut=0;
	   if(attr=="opacity"){
		   
		   icut=parseInt(parseFloat(getstyle(obj,attr))*100);//防止小数冲突
	   }
	   else{
		    icut=parseInt(getstyle(obj,attr));//不能处理透明度
	   }
    
  var speeds=(itarget-icut)/8;
  speeds=speeds>0?Math.ceil(speeds):Math.floor(speeds);//解决小数
      
if(icut==itarget){ //判断解决停止之后点击还会运动问题
    clearInterval(obj.timer);
      if(fn){
		  fn()
	  };
}else{
	if(attr=="opacity"){
		obj.style.filter='alpha(opacity:'+icut+speeds+')';
		obj.style.opacity=(icut+speeds)/100;
		
	}else{
		obj.style[attr]=icut+speeds+"px";
	}  
}
},30);};
//负数
function startmoves(speed,offsetLefts){
 clearInterval(timer);//击加快速防止重复点度
 timer=setInterval(function(){
  var speeds=speed;
      
if(a.offsetLeft<=offsetLefts){ //判断解决停止之后点击还会运动问题
    clearInterval(timer);
	
	
}
  
else{
   a.style.left=a.offsetLeft+speeds+"px";
}
var ta=document.getElementById("ss");
ta.value+=a.offsetLeft+"px"
},30);};
//小知识
//函数声明都不做可以return
//josn用for in循环遍历
//多个运动参数用json传参，需要全部运动结束才关闭定时器
//原型复制用 for in
//用Person的实例来覆盖Student的原型对象；创建了实例，比起前面那种，显示是浪费内存了，不过这同时
//也解决了上面那种方法的缺点，即此时Student.prototype上的任何修改不会体现到Person.prototype中，即
//子类不会影响父类。
var  F = function(){};
F.prototype = Person.prototype;
Student.prototype  = new F();
Student.prototype.constructor  = Student;
//点击过后hover失效 css加!important
//
//轮播思想
//轮播图;
	var curr1=0;
	$("#count span").first().addClass("imgselected");
	$("#count span").each(function(index){

		$(this).click(function(){
			var _index=index;
			clearInterval(sumcount);
			curr1=_index;
			changeto(_index);
		})
	})
	$("#count span").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(sumcount1,3000);
		
	})
	function sumcount1(){
		var imglength=$(".container img").length-1;
		if(curr1 < imglength){ 
        curr1 ++; 
		}else{ 
        curr1= 0;
		}
	  changeto(curr1);
		
	}
 
	  var timer=setInterval(sumcount1,3000);

	function changeto(num){
		 $("#count span").eq(num).addClass("imgselected").siblings("span").removeClass("imgselected");
		 $("#trip-img .container").animate({
			left:(num*-323)+'px'
		},500)
		 
	 }


//简单判断中英文字节 中文两个字节 英文1个
    function Checkval()   
   {   
      
      var n=0;   
      for(var i=0;i<s.value.length;i++)   
      {   
      //charCodeAt()可以返回指定位置的unicode编码,这个返回值是0-65535之间的整数   
        if(s.value.charCodeAt(i)<128)   
        {   
         n++;    
        }   
        else   
        {   
         n+=2;   
        }   
      }   
      alert(n);   
  }  


//格式化日期
    function formateDate(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var mi = date.getMinutes();
        m = m > 9 ? m : '0' + m;
        return y + '-' + m + '-' + d + ' ' + h + ':' + mi;
    }




//倒计时
window.onload=function(){  
        function Timeover(){  
            var timer=null;//定义定时器对象  
              var oparenttime=document.getElementsByClassName("liktimer")[0]; //获取对象  
                var endtime="3/30/2016 16:25:59"  //定义结束时间  
                var endtimer=new Date(endtime).getTime();  
             var startimer=new Date().getTime();  
             var opactiontimer=endtimer-startimer;  
                    var second=opactiontimer/1000;//获取总的秒  
                    var Minute=Math.floor(second/60);//获取总的分  
                  var houre=Math.floor(Minute/60);//获取总的小时   
                var day=Math.floor(houre/24);//获取总的天数  
                var houres=Math.floor(houre%24);//获取显示的小时  
                var Minutes=Math.floor(Minute%60);//获取显示的分  
                var seconds=Math.floor(second%60);//获取显示的秒  
                document.getElementsByClassName("RemainD")[0].innerHTML=day;  html展示结构
                document.getElementsByClassName("RemainH")[0].innerHTML=houres;  
                document.getElementsByClassName("RemainM")[0].innerHTML=Minutes;  
                document.getElementsByClassName("RemainS")[0].innerHTML=seconds;  
                if(startimer>endtimer){ //如果当下的时间大于了过期时间，关闭定时器  
                  clearInterval(timer);  
                  oparenttime.innerHTML="";  
                  oparenttime.innerHTML="倒计时已经结束";  
                }  
            }  
            function loop(){  
                Timeover();  
                timer=setInterval(Timeover,1000);  
            }  
            loop();//消除帅新等待1秒倒计时的bug  
 }  



//去除html标签
function removeHTMLTag(str) {
            str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
            str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
            //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
            str=str.replace(/ /ig,'');//去掉 
            return str;
    }


      (function(doc, win) {
                var docEl = doc.documentElement,﻿
                    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                    recalc = function() {
                        var clientWidth = docEl.clientWidth;
                        if (clientWidth > 1080) {
                            clientWidth = 750;
                            docEl.style.fontSize = 56 + 'px';
                        }
                        if (!clientWidth) return;
                        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
                    };
                recalc();
                if (!doc.addEventListener) return;
                win.addEventListener(resizeEvt, recalc, false);
                doc.addEventListener('DOMContentLoaded', recalc, false);
            })(document, window);

这是设置rem的



