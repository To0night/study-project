/* 
AAAAHHHBBCDHHHH
3

2
*/

const { listeners } = require('process');
const readline = require('readline');
const { isNumber } = require('util');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', (str) => {
	rl.on('line', (k) => {
		// 创建一个Set集合，用于存储字符串中的唯一字符
		let set = new Set(str);
		// 创建一个空对象，用于存储每个字符的最长连续子串长度
		let obj = {};

		// 遍历Set集合中的每个字符
		for (let letter of set) {
			// 创建一个正则表达式，用于匹配当前字符的连续子串
			const reg = new RegExp(`${letter}+`, 'g');
			// 使用正则表达式在字符串中查找匹配的子串
			let res = str.match(reg);
			res.forEach((item) => {
				// 更新对象中当前字符的最长子串长度
				obj[letter] = obj[letter]
					? Math.max(obj[letter], item.length) // 如果已存在该字符，则取最大长度
					: item.length; // 如果不存在，则直接存储当前长度
			});
		}
		// 对对象中所有字符的最长子串长度进行升序排序，并返回第k大的值，如果k超出范围则返回-1
		let arr = Object.values(obj).sort((a, b) => a - b);
		let res = -1;
		for (let i = arr.length - 1; i >= 0; i--) {
			if (arr[i] <= k) {
				res = arr[i];
				break;
			}
		}
		console.log(res); // 输出结果
	});
});

// rl.on('line', (str) => {
// 	rl.on('line', (k) => {
// 		// 创建一个Set集合，用于存储字符串中的唯一字符
// 		let set = new Set(str);
// 		// 创建一个空对象，用于存储每个字符的最长连续子串长度
// 		let obj = {};

// 		// 遍历Set集合中的每个字符
// 		for (let letter of set) {
// 			// 创建一个正则表达式，用于匹配当前字符的连续子串
// 			const reg = new RegExp(`${letter}+`, 'g');

// 			// 无限循环，直到正则表达式匹配结束
// 			while (true) {
// 				// 使用正则表达式在字符串中查找匹配的子串
// 				let res = reg.exec(str);
// 				if (res === null) {
// 					// 如果没有更多匹配的子串，则跳出循环
// 					break;
// 				} else {
// 					// 获取匹配子串的长度
// 					let repeatTimes = res[0].length;
// 					// 更新对象中当前字符的最长子串长度
// 					obj[letter] = obj[letter]
// 						? Math.max(obj[letter], repeatTimes) // 如果已存在该字符，则取最大长度
// 						: repeatTimes; // 如果不存在，则直接存储当前长度
// 				}
// 			}
// 		}

// 		// 对对象中所有字符的最长子串长度进行降序排序，并返回第k大的值，如果k超出范围则返回-1
// 		let res = Object.values(obj).sort((a, b) => b - a)[k - 1] ?? -1;
// 		console.log(res); // 输出结果
// 	});
// });
