/* 
bcdefa
acdefb

bcaacd
acabcd
*/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', (s) => {
	// 对字符串进行排序
	const sortedArr = s.split('').sort();

	// 如果排序后的字符串与原字符串相同，则说明已经是最小字符串，直接输出
	if (sortedArr.join('') === s) {
		console.log(s);
		rl.close();
		return;
	}

	// 遍历原字符串
	let sb = s.split('');
	for (let i = 0; i < s.length; i++) {
		// 如果当前字符与排序后的字符不相同，则进行交换
		if (s.charAt(i) !== sortedArr[i]) {
			const tmp = sb[i];
			let swapIndex = -1;
			// 找到排序后的字符在原字符串中的位置
			for (let j = i + 1; j < s.length; j++) {
				if (sb[j] === sortedArr[i]) {
					swapIndex = j;
				}
			}
			// 将原字符与排序后的字符交换
			sb[i] = sortedArr[i];
			sb[swapIndex] = tmp;
			break;
		}
	}

	// 输出最小字符串
	console.log(sb.join(''));
	rl.close();
});
