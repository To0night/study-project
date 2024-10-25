const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let lines = [];

// 逐行读取
rl.on('line', (input) => {
	lines.push(input);
	console.log('你输入的内容是' + input);
	if (input === 'quit') {
		rl.close();
	}
});

// 当输入流关闭时执行
rl.on('close', () => {
	// 执行关闭
	console.log('关闭时输入值的数组为：' + lines);
});
