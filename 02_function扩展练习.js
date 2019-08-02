//function相关拓展

//  前面的五个 先看看每个输出都是什么数   变量在哪里出现了  在哪里var了  有什么不一样
//可以自己在建立一个文件   每一组一组复制过去  在node 工具里输出  我起的都是一个名字
//一
var a = 10;
function b(){
    a = 100;  //因为var提升不缺少var 所以是内部并非全局
    console.log(a); //100 var提升 相当于函数作用域最前有var a和a=100
    var a;
    console.log(a); //100 同上
}
b();
console.log(a); //10 访问的全局

//二
var a= 100;
function b(){
    console.log(a); //undefined 声明提升但赋值不动
    var a= 10;
    console.log(a); //10
}
b();
console.log(a); //100 访问的全局

//三
var a= 100;
function b(){
    console.log(a); //100 函数内的a没有var 调用全局的a=100
    a = 10; //没有var 所以为全局
    console.log(a); //10 由上往下a赋值为10
}
b();
console.log(a); //10 由上往下a赋值为10

//四
//4.1
var a = 10; //全局
function b(a){
    a = 100; //因为补了var 并非全局
    console.log(a); //100
    var a; //声明提升 形成完整的var a=100
    console.log(a); //100
}
b(11);
//b(a)
console.log(a); //10 调用全局的10

//4.2
var a = 10; //全局
function b(a){
    a = 100; //因为补了var 并非全局
    console.log(a); //100
    var a; //声明提升 形成完整的var a=100
    console.log(a); //100
}
b(a); //b(10) 调用全局的10 
console.log(a); //10 调用全局的10
//和4.1一样

//4.3
var a = 10; //全局
function b(a){
    //a = 100;
    console.log(a); //11 函数实参转递a为11
    var a; //声明提升
    console.log(a); //11 函数实参转递a为11 同上
}
b(11);
//b(a)
console.log(a); //10 调用全局的10

//4.4
var a = 10; //全局
function b(a){
    //a = 100;
    console.log(a); //10 函数实参传递a为10
    var a; //声明提升
    console.log(a); //10 函数实参传递a为10 同上
}
b(a); //b(10) 调用全局的10
console.log(a); //10 调用全局的10

//五
//5.1
var a= 100; //全局
function a(){
    console.log(a); //报错a is not a function
    a = 10; //全局
    console.log(a); //报错a is not a function
}
a(); //启动报错 说明var a=100的全局覆盖了a函数在前判断
console.log(a); //报错a is not a function

//5.2
//var a= 100;
function a(){
    console.log(a); //没a
    a = 10; //全局 但不提升
    console.log(a); //10
}
a(); //启动成功
console.log(a); //10

//-----------------------------------------------------

//下面的是练习   先不要输出结果 看看你们自己能不能想出来结果
//console.log之后会出什么数据  然后在输出结果  对比着看看哪里想错了

function fun() {  
          a = 30;       
          var b = 20;  
}
fun();
console.log("a="+a); //a=30
console.log("b="+b); //找不到b 'b='+b is not defined


var a = 1;
function fun() {  
    console.log("a="+a); //a=undefined
    var a = 2; //提升
}
fun();
console.log(a); //1 调用全局a=1


var a; //全局 没赋值
function fun() { 
    a = "hehe"; //没var 全局 如果启动会赋值给全局的a
}
//没有启动函数
console.log(a); //undefined

var a; //全局 没赋值
function fun() {
  a = "hehe"; //没var 全局 如果启动会赋值给全局的a
} 
fun(); //启动了函数
console.log(a); //hehe


var a=1;
function fun(){
    var a=2; //提升 有var 局部
    console.log(a); //2 调用函数域内的a=2
} 
fun(); //启动函数
console.log(a); //1 调用全局的a=1


function fun(){
 for(var i = 0 ; i < 3 ; i++){ //0 1 2 三次
   console.log(i); //0 1 2
 }
 console.log(i); //3 循环内最后符合条件的是2 然后2+1
}
fun(); //启动函数


function fn(v){
    if (v==1||v==0){ //条件1
        return 1;
    }else if (v%2==0){ //条件2
        return fn(v/2)+2;
    }else{ //条件3
        return 2;
    }      
};
console.log(fn(8)); //7
//第一次实参是8 符合条件2 变为fn(4)+2 递归
//递归的实参是4 符合条件2 变为fn(2)+2 递归
//递归的实参是2 符合条件2 变为fn(1)+2 递归
//递归的实参是1 符合条件1 返回值1
//所以结果是1+2+2+2=7
console.log(fn(16)); //9 即能被2整除4次 结果是1+4*2 大于0的2的指数型的结果为1+指数值*2
console.log(fn(18)); //4 被2整除1次返回2 然后2+2 结果是4
console.log(fn(36)); //6 被2整除2次返回2 然后2+2*2 结果是6 即2+被2整除的次数*2 其他类推...
console.log(fn(19)); //2 不为1的奇数结果都是2
console.log(fn(1)); //1 1结果就是1 0也是
console.log(fn(0)); //1 1结果就是1 0也是

//------------------------------------------------------

//思维拓展
//1.由上题改*：判断一个自然数n含有多少个因数a
function fn(n,a){
    if (n==0){
        return '0没有因数';
    }else if (a==1) {
        return '1是所有非0自然数的因数';
    }else if (n==1){
        return 0;
    }else if (n%a==0){
        return fn(n/a,a)+1;
    }else{
        return 0;
    }      
};
console.log(fn(8,2)); //3
console.log(fn(100,3)); //0
console.log(fn(1024,2)) //10
console.log(fn(1000,2)) //3
console.log(fn(11566,19)) //0
console.log(fn(11655,1)) //1是所有非0自然数的因数
console.log(fn(0,255)) //0没有因数

//2.*判断一个数是质数还是合数(1) (据说有5种方法)
function isPrime(n) {
    if (n<=0) {
        return '0和负数不在讨论的范围'
    } else if (n==1) {
        return '1不是质数也不是合数';
    } else {     
        for (var i=2 ; i<=n-1 ;i++) { //其实i只要筛选到根号n就行，这是最容易想到的一个方法
            if (n%i==0) {
            return '合数';
            }
        }   
        return '质数';
    }
}
console.log(isPrime(0)); //0和负数不在讨论的范围
console.log(isPrime(1)); //1不是质数也不是合数
console.log(isPrime(19)); //质数
console.log(isPrime(255)); //合数

