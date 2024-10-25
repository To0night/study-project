const readline = require('readline');

// 创建readline接口实例
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', (array1Input) => {
	// 将输入的字符串按空格分割为数组，并将每个元素转换为数字，然后去除第一个元素
	const array1 = array1Input.split(' ').map(Number).slice(1);

	rl.on('line', (array2Input) => {
		// 将输入的字符串按空格分割为数组，并将每个元素转换为数字，然后去除第一个元素
		const array2 = array2Input.split(' ').map(Number).slice(1);

		rl.on('line', (kInput) => {
			// 将输入的字符串转换为整数
			const k = parseInt(kInput);

			// 创建一个空数组pairsSum
			const pairsSum = [];

			// 嵌套循环，将array1和array2中的元素两两相加，并将结果存储到pairsSum中
			for (const value1 of array1) {
				for (const value2 of array2) {
					pairsSum.push(value1 + value2);
				}
			}

			// 对pairsSum中的元素进行排序
			pairsSum.sort();

			// 取出pairsSum中前k个元素，并使用reduce方法计算它们的和
			const minSum = pairsSum.slice(0, k).reduce((sum, value) => sum + value, 0);

			// 输出最小和
			console.log(minSum);

			// 关闭readline接口，结束程序的执行
			rl.close();
		});
	});
});
