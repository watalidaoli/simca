//*****数组降维*****
//二维数组
var arr=[
    [0,1,2,3,4],
    [5,6,7,8,9],
    [11,12,13,14,15],
    [16,17,18,19,"jj"]
];
//高维数组
var arrx=[ 
        	[   
						[
              [44,44,44,44],
              [4,4,4,4,4]
            ],
            [3,3,3],
            [33,33,33]
          ],
          [1,1,1],
          [4,5,6]
        ];
//降维方法:
//第一种  
var newArr1=String(arr).split(",");
console.log(newArr1); //
//此方法和第二种方法适用于高维数组

//第二种
var newArr2=Array.prototype.concat.apply([],arr);
console.log(newArr2); //

//第三种 :循环/遍历->仅适用二维
var result=[];
for(var r=0;r<arr.length;r++){
    for(var c=0;c<arr[r].length;c++){
        result.push(arr[r][c]);
    }
}

//第四种 :循环/遍历->仅适用二维
var result=[];
for(var r=0;r<arr.length;r++){
      result=result.concat(arr[r]);
}

//第五种
var result=[].concat.apply([],arr);
//或 Array.prototype.concat.apply([],arr);
//或 [].concat(arr[0],arr[1],·····,arr[arr.length-1]);
//等于第二种方法
console.log(result);


//*****如何判断arr是不是数组*****
var arr={a:11};
function isArray(arr){  
		//考虑兼容性
    if(typeof Array.isArray === "function"){       
			return Array.isArray(arr);  
		//    
    }else{       
      return Object.prototype.toString.call(arr)==="[object Array]";      
    }  
}
//isArray是最简洁的方法,但是可能有兼容性问题
console.log(Array.isArray(arr));

