//得到cookie；
function getCookie(key){
	var arr1 = document.cookie.split('; ');
	for(var i = 0;i<arr1.length;i++)
	{
		var arr2 = arr1[i].split('=');
		if(arr2[0]==key)
		{
			return decodeURI(arr2[1]);
		}
	}
}
//设置cookie；
function setCookie(key,value,t){
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+t);
	oDate.toGMTString();
	document.cookie = key+'='+encodeURI(value)+';expires='+oDate;
}
//删除cookie；
function removeCookie(key){
	setCookie(key,'',-1);
}


//验证码函数
var countdown=10;  
  function settime(){  
  if (countdown == 0) {  
  $('.getyz').attr("disabled",false);  
  $('.getyz').html("点击获取验证码");  
  countdown = 10;  
  return false;  
    
  }else{  
  $(".getyz").attr("disabled", true);  
  $(".getyz").html("重新发送(" + countdown + ")");  
  countdown--;  
  }  
  setTimeout(function() {  
    settime();  
    },1000);  
  }  


/**
*获取指定日期的指定天数
* parma {string} fromDate 日期格式 '2017-02-02'
* parma {number} dayInterval 间隔天数 1表示后一天 -1表示前一天
*/

function getPointDate(fromDate,dayInterval){

var curDate = new Date(Date.parse(fromDate.replace(/-/g,"/")));
curDate.setDate(curDate.getDate()+dayInterval);
var year = curDate.getFullYear();
var month = (curDate.getMonth()+1)<10?"0"+(curDate.getMonth()+1):(curDate.getMonth()+1);
var day = curDate.getDate()<10?"0"+curDate.getDate():curDate.getDate();
return year+"-"+month+"-"+day;
};



/**
*格式化时间
*/
Date.prototype.format = function(fmt) { 
     var o = { 
        "M+" : this.getMonth()+1,                 //月份 
        "d+" : this.getDate(),                    //日 
        "h+" : this.getHours(),                   //小时 
        "m+" : this.getMinutes(),                 //分 
        "s+" : this.getSeconds(),                 //秒 
        "q+" : Math.floor((this.getMonth()+3)/3), //季度 
        "S"  : this.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
}      
//调用
//console.log(new Date().format('yyyy-MM-dd hh:mm:ss'))


//将时间戳转化年月日(数字类型)
function datenyr(timestamp){
	  var da=timestamp;
    da = new Date(da);
    console.log(da)
    var year = da.getFullYear()+'年';
    var month = da.getMonth()+1+'月';
    var date = da.getDate()+'日';
    console.log([year,month,date].join('-'));
}
//datenyr(1499136934148)

//时间戳 转为 yyyy-mm-dd hh:mm:ss
//如果不需要后面时分秒的则第二个参数传true
 function formatDateTime(inputTime,isshow) {    
    var date = new Date(inputTime);  
    var y = date.getFullYear();    
    var m = date.getMonth() + 1;    
    m = m < 10 ? ('0' + m) : m;    
    var d = date.getDate();    
    d = d < 10 ? ('0' + d) : d;    
    var h = date.getHours();  
    h = h < 10 ? ('0' + h) : h;  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    minute = minute < 10 ? ('0' + minute) : minute;    
    second = second < 10 ? ('0' + second) : second;   
    if(isshow){
    	  return y + '-' + m + '-' + d;
    }else{
    	return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
    }  
};      
 //alert(formatDateTime(1499137204438,true));    

　/**************
*实时检测输入框的字数
*用法：
<input type="text" name="explain" id="explain" onkeyup="check_input_Length(this)" >
<small>文字最大长度: 20. 还剩: <span id="chLeft">20</span>.</small>
**************/
function check_input_Length(which){
var maxChars = 20;
if (which.value.length > maxChars)
　 which.value = which.value.substring(0,maxChars);
　 var curr = maxChars - which.value.length;
　 document.getElementById("chLeft").innerHTML = curr.toString();
}


// 获取网址的get参数
var getparma= function(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return (r[2]);
  return null;
}
//alert(getparma('name'))

/**
*生成随机数
*指定范围 生成一位数字
*/
function randomNum(minNum,maxNum){ 
 switch(arguments.length){ 
 case 1: 
  return parseInt(Math.random()*minNum+1); 
 break; 
 case 2: 
  return parseInt(Math.random()*(maxNum-minNum+1)+minNum); 
 break; 
 default: 
  return 0; 
 break; 
 } 
} 
//console.log(randomNum(2,90))


/**
*生成随机数
*6位数字
*/
function MathRand(){ 
var Num=[]; 
for(var i=0;i<6;i++){ 
	Num.push(Math.floor(Math.random()*10)); 
	
} 
return Num;
}
//console.log(MathRand())


/**
*生成指定范围随机数不重复
*num 随机生成 1-num不重复的数字
*/
function between(num){
	var count=num; 
var originalArray=new Array;//原数组 
//给原数组originalArray赋值 
for (var i=0;i<count;i++){ 
	originalArray[i]=i+1; 
} 
var d1=new Date().getTime(); 
originalArray.sort(function(){ return 0.5 - Math.random(); }); 
for (var i=0;i<count;i++){ 
document.write(originalArray[i]+" , "); 
} 
var d2=new Date().getTime(); 
document.write("运算耗时"+(d2-d1)); 
}
//between(5)


//获取任意长度的随机字符串

var getRandomString = function(n){
     // 定义随机字符串的字符库
      let str = 'qwertyuiopasdfghjklzxcvbnm1我发234567890';
      // 定义一个临时变量tmp存储生成的随机字符串
      let tmp = '';
      //获取str的长度
      let len = str.length;
     // 生成一个长度为n的随机字符串
      for(let i = 0; i < n; i++){
         tmp += str.charAt(Math.floor(Math.random() * len));
    }
    return tmp;
}
//console.log(getRandomString(3))


/**
*从传递进来的字母序列中找到缺失的字母并返回它。如果所有字母都在序列中，返回 undefined
*/

function fearNotLetter(str) {
    var arr=[];
    var len = str.length;
    for(var i=0;i<len-1;i++){
        var n = str[i+1].charCodeAt() - str[i].charCodeAt();
         if( n >1 ){
            for(var j = 1;j < n;j++){
                arr.push( String.fromCharCode(str[i].charCodeAt()+j) );
            }
        }
    }
    return arr || undefined;
}
//console.log(fearNotLetter("acg"))



/**
*html符号转实体算法
*/
function convert(str) {
    str=str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");  
    return str;   
}
console.log(convert("<p></p>"))

/**
*完美判断是否为网址
*/
function IsURL(strUrl) {
    var regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i
    if (regular.test(strUrl)) {
        return true;
    }else {
        return false;
    }
}


/*
1、< 60s, 显示为“刚刚”
2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
4、>= 1day && < 1year, 显示日期“XX月XX日 XX:XX”
5、>= 1year, 显示具体日期“XXXX年XX月XX日 XX:XX”
*/
function timeFormat(time){
    var date = new Date(time),
        curDate = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 10,
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        curYear = curDate.getFullYear(),
        curHour = curDate.getHours(),
        timeStr;
 
    if(year < curYear){
        timeStr = year +'年'+ month +'月'+ day +'日 '+ hour +':'+ minute;
    }else{
        var pastTime = curDate - date,
            pastH = pastTime/3600000;
 
        if(pastH > curHour){
              timeStr = month +'月'+ day +'日 '+ hour +':'+ minute;
        }else if(pastH >= 1){
              timeStr = '今天 ' + hour +':'+ minute +'分';
        }else{
              var pastM = curDate.getMinutes() - minute;
              if(pastM > 1){
                timeStr = pastM +'分钟前';
              }else{
                timeStr = '刚刚';
              }
        }
    }
    return timeStr;
}

//console.log(timeFormat(1499150657736))



/**
*常用正则
//正整数
/^[0-9]*[1-9][0-9]*$/;
//负整数
/^-[0-9]*[1-9][0-9]*$/;
//正浮点数
/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;   
//负浮点数
/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;  
//浮点数
/^(-?\d+)(\.\d+)?$/;
//email地址
/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
//url地址
/^[a-zA-z]+://(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$/;
或：^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$ 
//年/月/日（年-月-日、年.月.日）
/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
//匹配中文字符
/[\u4e00-\u9fa5]/;
//匹配帐号是否合法(字母开头，允许5-10字节，允许字母数字下划线)
/^[a-zA-Z][a-zA-Z0-9_]{4,9}$/;
//匹配空白行的正则表达式
/\n\s*\r/;
//匹配中国邮政编码
/[1-9]\d{5}(?!\d)/;
//匹配身份证
/\d{15}|\d{18}/;
//匹配国内电话号码
/(\d{3}-|\d{4}-)?(\d{8}|\d{7})?/;
//匹配IP地址
/((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/;
//匹配首尾空白字符的正则表达式
/^\s*|\s*$/;
//匹配HTML标记的正则表达式
< (\S*?)[^>]*>.*?|< .*? />;
//sql 语句
^(select|drop|delete|create|update|insert).*$
//提取信息中的网络链接
(h|H)(r|R)(e|E)(f|F) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)? 
//提取信息中的邮件地址
\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)* 
//提取信息中的图片链接
(s|S)(r|R)(c|C) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)? 
//提取信息中的 IP 地址
(\d+)\.(\d+)\.(\d+)\.(\d+)
//取信息中的中国手机号码
(86)*0*13\d{9} 
//提取信息中的中国邮政编码
[1-9]{1}(\d+){5} 
//提取信息中的浮点数（即小数）
(-?\d*)\.?\d+ 
//提取信息中的任何数字
(-?\d*)(\.\d+)?
//电话区号
^0\d{2,3}$
//腾讯 QQ 号
^[1-9]*[1-9][0-9]*$ 
//帐号（字母开头，允许 5-16 字节，允许字母数字下划线）
^[a-zA-Z][a-zA-Z0-9_]{4,15}$ 
//中文、英文、数字及下划线
^[\u4e00-\u9fa5_a-zA-Z0-9]+$
*/

/**
*数组去重
*/
function unique(arr){
    var obj = {}
    var result = []
    for(var i in arr){
        if(!obj[arr[i]]){
            obj[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(unique([5,5,1,4,2,4,15,7]))



//五星评分
function getRating(rating) {
    if(rating > 5 || rating < 0) throw new Error('数字不在范围内');
    return '★★★★★☆☆☆☆☆'.substring(5 - rating, 10 - rating );
}



/*
* 正则验证
* @param s 验证字符串
* @param type 验证类型 money,china,mobile等 
* @return
*/
 function mCheck (s, type) {
    var objbool = false;
    var objexp = "";
    switch (type) {
        case 'money': //金额格式,格式定义为带小数的正数，小数点后最多三位
            objexp = "^[0-9]+[\.][0-9]{0,3}$";
            break;
        case 'numletter_': //英文字母和数字和下划线组成   
            objexp = "^[0-9a-zA-Z\_]+$";
            break;
        case 'numletter': //英文字母和数字组成
            objexp = "^[0-9a-zA-Z]+$";
            break;
        case 'numletterchina': //汉字、字母、数字组成 
            objexp = "^[0-9a-zA-Z\u4e00-\u9fa5]+$";
            break;
        case 'email': //邮件地址格式 
            objexp = "^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$";
            break;  
        case 'tel': //固话格式 
            objexp = /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/;
            break;
        case 'mobile': //手机号码 
            objexp = "^(13[0-9]|15[0-9]|18[0-9])([0-9]{8})$";
            break;
        case 'decimal': //浮点数 
            objexp = "^[0-9]+([.][0-9]+)?$";
            break;
        case 'url': //网址 
            objexp = "(http://|https://){0,1}[\w\/\.\?\&\=]+";
            break;
        case 'date': //日期 YYYY-MM-DD格式
            objexp = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
            break;
        case 'int': //整数 
            objexp = "^[0-9]*[1-9][0-9]*$";
            break;
        case "card"://身份证
            objexp = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
            break;
        case 'int+': //正整数包含0
            objexp = "^\\d+$";
            break;
        case 'int-': //负整数包含0
            objexp = "^((-\\d+)|(0+))$";
            break;
        case 'china': //中文 
            objexp = /^[\u0391-\uFFE5]+$/;
            break;
    }
    var re = new RegExp(objexp);
    if (re.test(s)) {
        return true;
    }
    else {
        return false;
    }
};


//对象深拷贝
function deepCopy(parent,child){
  child = child || {}
  if(typeof parent !== 'object'){
    return
  }  
  for(let item in parent){
    if(parent.hasOwnProperty(item)){
      if(typeof parent[item] === 'object'){
        child[item] = Array.isArray(parent[item])? [] : {}
        deepCopy(parent[item],child[item])   
      }else{
        child[item] = parent[item]
      }
    }
  }
  return child
}

/**
*生成随机字符串
*parma {number} n  数字 //getRandomString(3)
*/
function getRandomString(n){
  if(typeof n != 'number') return
  let str = ""
  for(;str.length < n;str += Math.random().toString(36).substr(2)){}
  return str.substr(0,n)
}

/* 例11：
*实现一个函数输入123456789，输出123，456，789”
*cal(123456789) //"123,456,789"
*/
function cal(str) {
    let target = '',
    arrStore = []
    target = typeof str === 'number' ? str.toString() : str
    target = target.split('').reverse()
    for(let i = 0; i < target.length; i++) {
        arrStore.unshift(target[i])
        if((i + 1) % 3 === 0) {
           if(i+1 !== target.length) arrStore.unshift(',')   
        }
    }
  return arrStore.join('')
}

/*
*或者str.replace(/(\d)(?=(?:\d{3})+$)/g,'$1,') //和例11一样功能
*/





