//for相关拓展

//1.有一张0.0001米的纸，对折多少次厚度可以达到8848米；
for (var h=0.0001,i=0 ; h<=8848 ; h*=2,i++ ) {
}
console.log(i,h);


//2.括号内填加减符号，使等式成立 可以把加减符号转换成加+1和-1 
//比如12-34就是 12+（-1*34）)  12+34就是 12+（1*34）)
//12()34()56()78()9=59
 for(var i=-1;i<2;i=i+2){
     for(var j=-1;j<2;j=j+2){
         for (var k=-1;k<2;k=k+2){
             for(var p=-1;p<2;p=p+2){
                 if(12+i*34+j*56+k*78+p*9==59){
                     console.log(i+"|"+j+"|"+k+"|"+p); //打印符合的结果
                 }
             }
         }
     }
 } //1|-1|1|-1  即 + - + -


//3.羽毛球拍15元，球3元，水2元。200元每种至少一个(初始值1)，有多少可能
//羽毛球上限200/15取整是13 球是66 水是100
 for(var i=1,x=0;i<=13;i++){
     for(var j=1;j<=66;j++){
         for(var k=1;k<=100;k++){
            if(i*15+j*3+k*2==200){
                 x++; //记录可能的组合次数
             }
         }
     }
 }
 console.log(x) //205


//4.输入某年某月某日，判断这一天是这一年的第几天？
var year=prompt('请输入一个年');
    year=parseInt(year);
var month=prompt('请输入一个月');
    month=parseInt(month);
var day=prompt('请输入一个日');
    day=parseInt(day);
var sum=0;
 for(var i=1;i<=month;i++){
    if(i==1||i==3||i==5||i==7||i==8||i==10||i==12){
         sum += 31;
     }else if(i==4||i==6||i==9||i==11){
             sum += 30;
     }else if(i==2){
             sum += 28;
     }
 }
 if((year%4==0 && year%100!=0 || year%400==0) && month>2){
     sum += 1;
 }
 console.log("这是这年的第"+sum+"天");
 //例如 1995 09 27 是 1995 年的第 273 天
 //也可以使用switch-case
