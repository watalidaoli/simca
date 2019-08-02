//情况1:url中不包含同名的属性时
//2019.6.17
//1.如何获取浏览器URL中查询字符串中的参数？
//测试地址为：http://www.runoob.com/jquery/misc-trim.html?channelid=12333&name=xiaoming&age=23
var url="http://www.runoob.com/jquery/misc-trim.html?channelid=12333&name=xiaoming&age=23";
//无重复属性名直接用 查询字符串转对象.js方法2即可
//先获得查询字符串
//var str=url.slice(url.indexOf("?")); //获取？后面的部分
var arr=url.split("?")[1].split("&"); //先通过？分解得到？后面的所需字符串，再将其通过&分解开存放在数组里
var obj={}; //空对象
for (var i of arr){
  obj[i.split("=")[0]]=i.split("=")[1]; //对数组每项用=分解开，=前为对象属性名，=后为属性值
}
console.log(obj); //{channelid: "12333", name: "xiaoming", age: "23"}
console.log(obj.name); //

//情况2:如果url中有同名的属性时
var str="http:127.0.0.1:3306/index?uname=dingding&upwd=123456&favs=swimming&favs=running&favs=music";
//创建解析函数(可以解析含同名属性的url)
function parse_querystring(str){
	var arr=str.split("?")[1].split("&"); 
	//先通过？分解得到？后面的所需字符串，再将其通过&分解开存放在数组里
	var obj={}; //
	for (var i of arr) {
		//obj[i.split("=")[0]]=i.split("=")[1]; 
		//对数组每项用=分解开，=前为对象属性名，=后为属性值
		var name=i.split("=")[0]; //属性名
		var value=i.split("=")[1]; //值
		//但是存在相同的属性名的属性:比如复选框一类多个元素都拥有一组name
		//--需要判断
		//如果对象中有这个属性:
		if(name in obj){
			//属性重复了 直接放入对象中的同名属性形成的数组中
			//如果该属性已创建自己的数组:
			if(obj[name] instanceof Array){ //instanceof 判断左侧是否为右侧的类/或者子类,返回bool
				obj[name].push(value);
			}else{
				//创建同名属性的数组再放入
				obj[name]=[].concat(obj[name], value); //
				//等同于 先将obj[name]转数组,再追加到数组尾部
				//obj[name]=obj[name].split("");
				//obj[name].push(value);
			}
		}else{
			//此处是新属性,放入对象即可
			obj[name]=value; //
		}
	}
	//console.log(obj);
	return obj;
}
console.log(parse_querystring(str)); //{uname: "dingding", upwd: "123456", favs: Array(3)}
