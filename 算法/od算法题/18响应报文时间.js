/*
3
0 20
1 10
8 20

11
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let numQueries; // 存储查询的数量
let arrivalTime = []; // 存储每次查询的到达时间
let maxRespCode = []; // 存储每次查询的最大响应码

rl.on('line', (input) => {
	// 首次输入，用于获取查询的数量
	if (!numQueries) {
		numQueries = parseInt(input); // 解析输入为整数，并存储到 numQueries
	} else {
		// 分割输入的两个数值，并将其转换为数字类型
		const [a, b] = input.split(' ').map(Number);
		arrivalTime.push(a); // 将到达时间存入 arrivalTime 数组
		maxRespCode.push(b); // 将最大响应码存入 maxRespCode 数组
		// 当输入的查询数达到指定的数量时，开始处理计算
		if (arrivalTime.length === numQueries) {
			let minResponseTime = Infinity; //Number.MAX_SAFE_INTEGER 2的53次方-1 表示可以安全使用的最大整数值 初始化最小响应时间为一个很大的值
			for (let i = 0; i < numQueries; i++) {
				// 遍历每个查询
				let maxRespTime = 0; // 用于存储当前查询的最大响应时间
				// 根据 maxRespCode 的值决定计算方式
				if (maxRespCode[i] < 128) {
					maxRespTime = maxRespCode[i]; // 如果 maxRespCode 小于 128，直接使用其值作为 maxRespTime
				} else {
					// 如果 maxRespCode 大于等于 128，进行复杂计算
          // 提取 maxRespCode 的第 5 至 7 位作为 exp exp最大响应时间的高5~7位:
					const exp = (maxRespCode[i] & 0x70) >> 4; // 0x表示16进制数 16进制0x70 => 2进制01110000 >>4 结果会右移4位 
          // 提取 maxRespCode 的第 1 至 4 位作为 mant mant 为最大响应时间的低4位。
					const mant = maxRespCode[i] & 0x0f; // 16进制0x0f => 2进制00001111 
					maxRespTime = (mant | 0x10) << (exp + 3); // 计算 maxRespTime 的实际值
				}
				// 计算当前查询的响应时间
				const responseTime = arrivalTime[i] + maxRespTime;
				// 更新最小响应时间
				minResponseTime = Math.min(minResponseTime, responseTime);
			}
			console.log(minResponseTime); // 输出最小响应时间
			rl.close(); // 关闭 readline 接口
		}
	}
});
