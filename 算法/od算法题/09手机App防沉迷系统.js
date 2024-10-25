/* 
2
App1 1 09:00 10:00
App2 2 11:00 11:30
09:30

App1
*/
const readline = require('readline');

// 定义App类，用于存储App的相关信息
class App {
	constructor(name, priority, startTime, endTime) {
		this.name = name; // App名称
		this.priority = priority; // App优先级
		this.startTime = startTime; // App允许使用的起始时间（以分钟为单位）
		this.endTime = endTime; // App允许使用的结束时间（以分钟为单位）
	}
}

// 创建readline接口实例
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// 用于存储输入行的数组
const lines = [];
// 读取输入
rl.on('line', (line) => {
	lines.push(line);
}).on('close', () => {
	// 当输入完成后开始处理数据
	processInput(lines);
});

// 处理输入数据的函数
function processInput(lines) {
	const n = parseInt(lines.shift()); // 读取App数量
	const apps = []; // 创建App列表，用于存储所有App

	for (let i = 0; i < n; i++) {
		// 循环读取每个App的信息，并创建App对象添加到列表中
		const [appName, appPriority, appStartTime, appEndTime] = lines.shift().split(' ');
		apps.push(
			new App(appName, parseInt(appPriority), convertTime(appStartTime), convertTime(appEndTime))
		);
	}

	const queryTime = convertTime(lines.shift()); // 读取查询时间，并转换为分钟
	let appAtTime = 'NA'; // 初始化查询时间对应的App名称为"NA"

	// 创建已注册App列表
	const registeredApps = [];
	for (const app of apps) {
		if (app.startTime >= app.endTime) continue; // 如果起始时间不小于结束时间，则跳过

		// 遍历已注册的App列表，检查时间冲突
		for (let i = registeredApps.length - 1; i >= 0; i--) {
			const registered = registeredApps[i];
			// 如果存在时间冲突
			if (
				Math.max(app.startTime, registered.startTime) < Math.min(app.endTime, registered.endTime)
			) {
				// 如果当前App的优先级高于已注册App的优先级
				if (app.priority > registered.priority) {
					registeredApps.splice(i, 1); // 注销低优先级的App
				} else {
					continue; // 如果优先级不高，继续检查下一个已注册App
				}
			}
		}

		// 将当前App添加到已注册App列表中
		registeredApps.push(app);
	}

	// 遍历已注册App列表，找到查询时间对应的App
	for (const app of registeredApps) {
		if (queryTime >= app.startTime && queryTime < app.endTime) {
			appAtTime = app.name; // 更新查询时间对应的App名称
			break; // 找到后退出循环
		}
	}

	console.log(appAtTime); // 输出查询时间对应的App名称
}

// 时间转换函数，将时间字符串转换为以分钟为单位的整数
function convertTime(time) {
	const [hours, minutes] = time.split(':').map(Number); // 将时间字符串按照":"分割并转换为数字
	return hours * 60 + minutes; // 将小时和分钟转换为分钟
}
