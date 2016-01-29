//xiao.js 写于2015年
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

}
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
    function drap(oBox){
    // 容器鼠标按下事件
    oBox.onmousedown = function (e){
        var e = e || window.event;
        disX = e.clientX - this.offsetLeft;
        disY = e.clientY - this.offsetTop;
        document.onmousemove = function (e){
            var e = e || window.event;
            oBox.style.left = (e.clientX - disX) + 'px';
            oBox.style.top = (e.clientY - disY) + 'px';
        };
        document.onmouseup = function (){
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return false;
    };
	}
})

//结束;
//
    
