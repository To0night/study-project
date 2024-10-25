let a1 = new Set('aaaabbbssss');
console.log(a1, 111);

let a2 = 'asda, dads da.sd,"d asd'.replace(/[^\w\s]/g, '');
console.log(a2, 222);

let a3 = 'aaaabbbssss'.match(/.{1,3}/g);
console.log(a3, 333);

let reg = /s+/;
let a4 = reg.exec('aaaasssccaaasdddasd');
console.log(a4, 444, a4.index);

/* 
1、十六进制转十进制：
const decimal = parseInt("1A", 16);
2、十进制转二进制：
const binary = (10).toString(2); // "1010"
3、二进制转十六进制：
const hex = (parseInt("1010", 2)).toString(16); // "a"
*/
console.log('aaaa'.slice(0,1));

console.log(/a+/.exec('baaa'));

