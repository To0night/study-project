/* 
输入N个互不相同的二维整数坐标，求这N个坐标可以构成的正方形数量。[内积为零的的两个向量垂直]

输入描述
第一行输入为N，N代表坐标数量，N为正整数。N <= 100

之后的 N 行输入为坐标x y以空格分隔，x，y为整数，-10<=x, y<=10

输出描述
输出可以构成的正方形数量。
*/
const rl = require('readline').createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
	const n = parseInt(await readline());

	const coordinates = [];
	for (let i = 0; i < n; i++) {
		coordinates.push(await readline());
	}
	console.log(coordinates, 'coordinates');
	console.log(solution(coordinates));
})();

function solution(coordinates) {
	let squareCount = 0;
	// 去重
	const set = new Set(coordinates);
	for (let i = 0; i < coordinates.length; i++) {
		// 取出x,y坐标
		let [x1, y1] = coordinates[i].split(' ').map(Number);
		for (let j = i + 1; j < coordinates.length; j++) {
      // 取出第二个点的坐标，两点就可以得出只有上下两种正方形
			let [x2, y2] = coordinates[j].split(' ').map(Number);
		// 正方形外画大正方形，获得两端距离（y1-y2） (x1-x2)]，再得出坐标，判断是否存在
			let x3 = x1 - (y1 - y2);
			let y3 = y1 + (x1 - x2);
			let x4 = x2 - (y1 - y2);
			let y4 = y2 + (x1 - x2);
			if (set.has(x3 + ' ' + y3) && set.has(x4 + ' ' + y4)) squareCount++;
			let x5 = x1 + (y1 - y2);
			let y5 = y1 - (x1 - x2);
			let x6 = x2 + (y1 - y2);
			let y6 = y2 - (x1 - x2);
			if (set.has(x5 + ' ' + y5) && set.has(x6 + ' ' + y6)) squareCount++;
		}
	}
	return squareCount / 4;
}
