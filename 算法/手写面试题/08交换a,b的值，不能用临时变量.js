let a = 5;
let b = 10;

// 方法一：使用加法（仅限于数字）
a = a + b;
b = a - b;
a = a - b;
console.log(a); // 输出 10
console.log(b); // 输出 5

// 方法二：使用解构赋值
[a, b] = [b, a];
console.log(a); // 输出 10
console.log(b); // 输出 5

/* 
数组扁平化
1、falt 
2、递归
3、reduce
4、循环
*/

/* 
将类数组对象转换化为数组
Array.prototype.slice.call()
使用扩展运算符
使用Array.from()方法
*/

/* 
将JS对象转换为树形结构通常涉及到递归遍历对象
递归
*/
