/* 
abcd
b[cd]

1
*/
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', (source) => {
	rl.on('line', (target) => {
		// target = target.replace(/\[(.*?)\]/g, '[$1]');
		console.log(target, 'target');
		const pattern = new RegExp(target);
		const matcher = pattern.exec(source);
		if (matcher) {
			console.log(matcher.index);
		} else {
			console.log(-1);
		}
		rl.close();
	});
});
