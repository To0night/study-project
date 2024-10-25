// const readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// let lines = [];
// rl.on('line', (line) => {
// 	lines.push(line);
// });
// rl.on('close', () => {
// 	console.log(lines, 'lines');
// 	solve(lines);
// });

/* 
8 2
N 代表部署发动机的总个数
E 代表计划手动启动的发动机总个数
0 0
1 7
T 代表发动机的手动启动时刻
P 代表此发动机的位置编号

输出
第一行输出M, 最后被启动的发动机个数
第二行输出M个整数，表示最后被启动的发动机的位置编号，从小到大排序，用空格分隔。
1
4
*/
// [ '8 2', '0 3', '1 7' ]
function solve(lines = ['16 2', '0 3', '1 7']) {
	// 解析输入
	const [N, E] = lines[0].split(' ').map(Number);
	// 初始化启动时间数组
	const startTime = new Array(N).fill(10 * N + 1);
	// 处理手动启动的输入
	for (let i = 1; i <= E; i++) {
		const [T, P] = lines[i].split(' ').map(Number);
		startTime[P] = Math.min(startTime[P], T);
	}
	// 模拟关联启动
	for (let t = 0; t < N; t++) {
		for (let i = 0; i < N; i++) {
			if (startTime[i] === t) {
				startTime[(i - 1 + N) % N] = Math.min(startTime[(i - 1 + N) % N], t + 1);
				startTime[(i + 1) % N] = Math.min(startTime[(i + 1) % N], t + 1);
			}
		}
	}
	// 找出最后启动的时间
	const lastStart = Math.max(...startTime);
	// 统计并输出最后启动的发动机
	const lastEngines = startTime.reduce((acc, time, index) => {
		if (time === lastStart) acc.push(index);
		return acc;
	}, []);
	console.log(lastEngines.length);
	console.log(lastEngines.join(' '), 111);
}

solve(['8 2', '0 3', '1 7']);

function solve2(lines) {
	// 发动机的总个数, 计划手动启动的发动机总个数
	const [n, e] = lines[0].split(' ').map(Number);
	// 记录每个发动机的最终启动时刻, 初始化为极大值，方便后面取最早启动时刻
	const startTime = new Array(n).fill(1001);
	for (let i = 1; i <= e; i++) {
		// 发动机的手动启动时刻, 发动机的位置编号
		const [t, p] = lines[i].split(' ').map(Number);
		// p号发动机在t时刻手动启动
		startTime[p] = t;
	}
	// 从编号 i 的发动机手动启动后, 关联启动到编号 j
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			// 内关联距离
			const innerDis = Math.abs(i - j);
			// 外关联距离
			const outerDis = n - innerDis;
			// 最短关联距离
			const dis = Math.min(innerDis, outerDis);
			startTime[j] = Math.min(startTime[j], startTime[i] + dis);
		}
	}
	// 找出最后启动的时间
	const lastStart = Math.max(...startTime);
	// 统计并输出最后启动的发动机
	const lastEngines = startTime.reduce((acc, time, index) => {
		if (time === lastStart) acc.push(index);
		return acc;
	}, []);
	console.log(lastEngines.length);
	console.log(lastEngines.join(' '), 222);
}

solve2(['8 2', '0 3', '1 7']);



const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let lines = [];
// 逐行读取
rl.on('line', (input) => {
	console.log(input, 'input');
	lines.push(input);
});
rl.on('close', () => {
	testFun(lines);
});
/* 
8 2
N 代表部署发动机的总个数
E 代表计划手动启动的发动机总个数
0 0
1 7
T 代表发动机的手动启动时刻
P 代表此发动机的位置编号
 */
function testFun(lines) {
	const [N, E] = lines[0].split(' ').map(Number);
	const startTime = new Array(N).fill(10 * N + 1);
	for (let i = 1; i <= E; i++) {
		const [T, P] = lines[i].split(' ').map(Number);
		startTime[P] = Math.min(startTime[P], T);
	}
	// 计算t1到t2的左右距离，得到最短距离的数组
	for (let t1 = 0; t1 < N; t1++) {
		for (let t2 = 0; t2 < N; t2++) {
			let leftDis = Math.abs(t1 - t2);
			let rightDis = N - leftDis;
			// 找出最小的距离
			const dis = Math.min(leftDis, rightDis);
			// 比较原来t2和t1+dis的大小，默认值设置的很大，只要不是手动的就都不变
			startTime[t2] = Math.min(startTime[t2], startTime[t1] + dis);
		}
	}
	let maxTime = Math.max(...startTime);
	let lastTime = startTime.reduce((acc, item, index) => {
		if (item === maxTime) {
			acc.push(index);
		}
		return acc;
	}, []);
	console.log(lastTime.length);
	console.log(lastTime.join(' '), 123);
}
