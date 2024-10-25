
/* 
The furthest distance in the world, Is not between life and death, But when I stand in front of you, Yet you don’t know that I love you.
f

front furthest
*/
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', (sentence) => {
	rl.on('line', (prefix) => {
		sentence = sentence.replace(/[^\w\s]/g, ' '); // 将标点符号替换为空格
		const wordSet = new Set(sentence.split(' ')); // 存储单词的集合，自动去重且按照字典序排序
		let ans = '';
		for (const word of Array.from(wordSet).sort()) {
			// 遍历单词集合
			if (word.startsWith(prefix)) {
				// 如果单词以前缀开头
				ans += word + ' '; // 将单词加入答案字符串
			}
		}
		if (ans) {
			// 如果答案字符串不为空
			console.log(ans); // 输出单词序列
		} else {
			console.log(prefix); // 否则输出前缀
		}
		rl.close();
	});
});
