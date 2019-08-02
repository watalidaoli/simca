//array数组练习

//基础API
var arr=[1,2,3,4,5];
var arr1=arr.toString();
console.log(arr1); //1,2,3,4,5

var arr2=arr.join("|");
console.log(arr2); //1|2|3|4|5

var arrr=["ww","jj"];
var arr3=arr.concat(arrr);
console.log(arr3); //[1, 2, 3, 4, 5, "ww", "jj"]

var arr4=arr.slice(2,4);
console.log(arr4); //[3,4]
// 注意这些都是返回的新数组 对原数组没有影响
console.log(arr); //[1, 2, 3, 4, 5]

//翻转
var arr=["a","b","c","d"];
var arr1=[];
for(var i=arr.length-1;i>=0;i--){
    arr1=arr1.concat(arr[i])  
}
console.log(arr1); //["d","c","b","a"]

//练习
//1.fun(1)(2)  要求输出3  看看你们有没有自己的想法
//fun(1)执行完还是一个函数 作为新的fun2(2)
function a(n){
    return function a(n){
        console.log(3);
    }
}
a(1)(2); //3
//*此题可深入

//2.排序   最后输出arr 里面的内容从小到大排列
var arr=[1,3,5,7,9,8,6,4,2,33,89,77,34]
arr.sort( function(a,b) {
    return a-b;
} );
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 33, 34, 77, 89 ]

//3.*对下列数组中的相同元素排序并判断出现的次数返回对象
var arr=[1,5,6,7,3,11,55,22,66,1,44,5,6,7,7,9,9,3,5]
var hash={};
//...
//输出下面的情况   就是（“1”出现了2次 ， “3”出现了2次。。。。）
//{ '1': 2,'3': 2,'5': 3,'6': 2,'7': 3,'9': 2,'11': 1,'22': 1,'44': 1,'55': 1,'66': 1 }

//*给数组去重
//思路1：for循环
var arr=[1,5,6,7,3,11,55,22,66,1,44,5,6,7,7,9,9,3,5]
var hash={}; //存在记忆属性 对象会自动排序
//遍历
for(var i=0;i<arr.length;i++) {
    for (var j=0,count=0;j<arr.length;j++) {
        if (arr[i]==arr[j]) {
            count++; //计算重复元素的个数
        }  
    }
    hash[arr[i]]=count;
}
console.log(hash);
//{1: 2, 3: 2, 5: 3, 6: 2, 7: 3, 9: 2, 11: 1, 22: 1, 44: 1, 55: 1, 66: 1}

//思路2：undefined
var arr=[1,5,6,7,3,11,55,22,66,1,44,5,6,7,7,9,9,3,5]
var hash={};
//遍历
for(var i=0;i<arr.length;i++) {
    var v=arr[i];
    if (hash[arr[i]]==undefined) {
        hash[v]=1;
    } else {
        hash[v]++;
    }
}
console.log(hash);
//{1: 2, 3: 2, 5: 2, 6: 2, 7: 2, 9: 2, 11: 1, 22: 1, 44: 1, 55: 1, 66: 1}
