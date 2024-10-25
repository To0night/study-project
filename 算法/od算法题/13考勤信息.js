/* 
2
present
present absent present present leaveearly present absent

true false
1. 出勤奖条件
员工要获得出勤奖，必须满足以下三个条件：
缺勤不超过一次：即字符串中 absent 出现的次数不能超过1次。
没有连续的迟到/早退：即字符串中不能有 late 和 leaveearly 这两种情况连续出现。
任意连续7次考勤中，缺勤/迟到/早退不超过3次：在任何7次连续考勤记录中，absent、late 和 leaveearly 的总次数不能超过3次。
*/

// 引入readline模块用于读取命令行输入
const readline = require('readline');

// 创建readline接口实例
const rl = readline.createInterface({
	input: process.stdin, // 标准输入流
	output: process.stdout, // 标准输出流
});

// 定义函数判断是否能获得考勤奖
const canReceiveAward = (records) => {
	let absentCount = 0; // 缺勤次数计数器
	for (let i = 0; i < records.length; i++) {
		if (records[i] === 'absent') {
			// 如果记录为缺勤
			absentCount++; // 缺勤次数加1
			if (absentCount > 1) return false; // 缺勤超过1次，返回false
		}
		if (records[i] === 'late' || records[i] === 'leaveearly') {
			// 如果记录为迟到或早退
			// 如果前一天也是迟到或早退，返回false
			if (i > 0 && (records[i - 1] === 'late' || records[i - 1] === 'leaveearly')) {
				return false;
			}
		}
		if (i >= 6) {
			// 检查任意连续7天的考勤记录
			let countIn7Days = 0; // 连续7天内非正常上班的天数
			for (let j = i - 6; j <= i; j++) {
				if (records[j] !== 'present') {
					// 如果这7天内有非出勤记录
					countIn7Days++;
				}
			}
			if (countIn7Days > 3) return false; // 如果连续7天内非正常上班超过3天，返回false
		}
	}
	return true; // 所有条件都满足，返回true
};

let lines = []; // 存储输入行的数组

// 监听命令行输入
rl.on('line', (line) => {
	lines.push(line); // 将每行输入存储到lines数组中
}).on('close', () => {
	// 输入结束时触发
	const testCases = parseInt(lines[0], 10); // 解析测试用例数量
	for (let i = 1; i <= testCases; i++) {
		// 遍历每个测试用例
		const attendanceRecords = lines[i].trim().split(' '); // 分割考勤记录
		// 输出每个测试用例的结果，并根据条件添加空格分隔
		process.stdout.write(canReceiveAward(attendanceRecords) ? 'true' : 'false');
		if (i < testCases) {
			process.stdout.write(' ');
		}
	}
	process.exit(0); // 执行完毕后退出程序
});
