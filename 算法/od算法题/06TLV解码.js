/* 
TLV编码是按[Tag Length Value]格式进行编码的，一段码流中的信元用Tag标识，Tag在码流中唯一不重复，Length表示信元Value的长度，Value表示信元的值。
码流以某信元的Tag开头，Tag固定占一个字节，Length固定占两个字节，字节序为小端序。
现给定TLV格式编码的码流，以及需要解码的信元Tag，请输出该信元的Value。
输入码流的16进制字符中，不包括小写字母，且要求输出的16进制字符串中也不要包含小写字母；码流字符串的最大长度不超过50000个字节。

输入描述
输入的第一行为一个字符串，表示待解码信元的Tag；
输入的第二行为一个字符串，表示待解码的16进制码流，字节之间用空格分隔。
输出描述
输出一个字符串，表示待解码信元以16进制表示的Value。

31
32 01 00 AE 90 02 00 01 02 30 03 00 AB 32 31 31 02 00 32 33 33 01 00 CC

32 33
js的进制转化方法 
16转10
parseInt('1A', 16)
10转2
(111).toString(2)
*/

function TLV(tag, str) {
	let arr = str.split(' ').map(String);
	let currentTag,
		currentLength,
		currentValue = [];
	let i = 0;
	while (i < arr.length) {
		currentTag = arr[i];
		currentLength = parseInt(arr[i + 2] + arr[i + 1], 16);
		currentValue = [];
		for (let j = 1; j <= currentLength; j++) {
			currentValue.push(arr[i + 2 + j]);
		}
		i += 3 + currentLength;
		if (currentTag == tag) {
			break;
		}
	}
	return currentValue.join(' ');
}

console.log(TLV(31, '32 01 00 AE 90 02 00 01 02 30 03 00 AB 32 31 31 02 00 32 33 33 01 00 CC'));
