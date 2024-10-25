
/* 
3
12abc-abCABc-4aB@

12abc-abc-ABC-4aB-@
*/
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const lines = [];
rl.on('line', (line) => {
	lines.push(line);
	if (lines.length === 2) {
		const k = parseInt(lines[0]);
		const s = lines[1];
		const arr = s.split('-');
		const prefix = arr.shift();
		const postfix = arr
			.join('')
			.match(new RegExp(`.{1,${k}}`, 'g'))
			.map((str) => {
				let upperCase = 0;
				let lowerCase = 0;
				[...str].forEach((char) => {
					if (/[a-z]/.test(char)) lowerCase++;
					if (/[A-Z]/.test(char)) upperCase++;
				});
				if (upperCase > lowerCase) {
					return str.toUpperCase();
				}
				if (lowerCase > upperCase) {
					return str.toLowerCase();
				}
				return str;
			})
			.join('-');
		console.log(prefix + '-' + postfix);
	}
});
