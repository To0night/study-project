/* 
[1,4,5,2,2]
7

[5, 2]
*/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const inputLines = [];

// 读取输入行
rl.on('line', (line) => {
	inputLines.push(line);
	if (inputLines.length === 2) {
		rl.close();
	}
});

rl.on('close', () => {
	// 解析输入的步数数组和房子总格数
	const steps = JSON.parse(inputLines[0]);
	const count = parseInt(inputLines[1], 10);

	let minIdxSum = Number.MAX_VALUE; // 表示可表示的最大正数 一个近似于1.7976931348623157×10^308的数字，用于表示 JavaScript 中可用的最大数值
	let ans = '';

	// 遍历数组中的所有可能的组合
	for (let idx1 = 0; idx1 < steps.length; idx1++) {
		for (let idx2 = idx1 + 1; idx2 < steps.length; idx2++) {
			const step1 = steps[idx1];
			const step2 = steps[idx2];

			// 如果两个步数之和等于房子总格数
			if (step1 + step2 === count) {
				const idxSum = idx1 + idx2;
				// 如果当前组合的索引和小于已找到的最小索引和
				if (idxSum < minIdxSum) {
					// 更新最小索引和
					minIdxSum = idxSum;
					// 更新答案
					ans = `[${step1}, ${step2}]`;
				}
				// 找到满足条件的组合后，跳出内层循环
				break;
			}
		}
	}

	// 输出结果
	console.log(ans);
});
