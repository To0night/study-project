const readline = require('readline');

// 创建readline接口实例
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// 用于存储输入行的数组
const lines = [];

// 读取输入行的事件监听
rl.on('line', (line) => {
	lines.push(line);
}).on('close', () => {
	// 当输入完成时，开始处理数据

	// 读取一行输入并将其转换为整数数组的函数
	const readIntArray = (line) => line.split(' ').map(Number);

	// 读取投资项目数量m、总投资额N和风险容忍度X
	const [m, N, X] = readIntArray(lines[0]);
	// 读取每个项目的预期回报率
	const returns = readIntArray(lines[1]);
	// 读取每个项目的风险值
	const risks = readIntArray(lines[2]);
	// 读取每个项目的最大投资额
	const maxInvestments = readIntArray(lines[3]);

	// 初始化最大回报为0
	let maxReturn = 0;
	// 初始化最大回报对应的投资方案数组
	let bestInvestments = new Array(m).fill(0);

	// 遍历所有项目
	for (let i = 0; i < m; i++) {
		// 检查项目i的风险是否在容忍度X以内
		if (risks[i] <= X) {
			// 计算项目i的投资额，不超过总投资额N和项目i的最大投资额
			const investmentForI = Math.min(N, maxInvestments[i]);
			// 计算当前项目的回报
			const currentReturn = investmentForI * returns[i];
			// 如果当前回报大于已知的最大回报
			if (currentReturn > maxReturn) {
				// 更新最大回报
				maxReturn = currentReturn;
				// 重置最佳投资方案数组，并为项目i分配投资额
				bestInvestments = new Array(m).fill(0);
				bestInvestments[i] = investmentForI;
			}
		}

		// 遍历项目i之后的项目，寻找两个项目的组合投资方案
		for (let j = i + 1; j < m; j++) {
			// 如果两个项目的风险总和在容忍度范围内
			if (risks[i] + risks[j] <= X) {
				let investmentForI, investmentForJ;
				// 根据预期回报率决定投资额分配
				if (returns[i] > returns[j]) {
					// 如果项目i的回报率高于项目j，优先投资项目i
					investmentForI = Math.min(N, maxInvestments[i]);
					// 计算项目j的剩余可投资额
					investmentForJ = Math.min(N - investmentForI, maxInvestments[j]);
				} else {
					// 如果项目j的回报率高于项目i，优先投资项目j
					investmentForJ = Math.min(N, maxInvestments[j]);
					// 计算项目i的剩余可投资额
					investmentForI = Math.min(N - investmentForJ, maxInvestments[i]);
				}
				// 计算两个项目组合的当前回报
				const currentReturn = investmentForI * returns[i] + investmentForJ * returns[j];
				// 如果当前回报大于已知的最大回报
				if (currentReturn > maxReturn) {
					// 更新最大回报
					maxReturn = currentReturn;
					// 重置最佳投资方案数组，并为两个项目分配投资额
					bestInvestments = new Array(m).fill(0);
					bestInvestments[i] = investmentForI;
					bestInvestments[j] = investmentForJ;
				}
			}
		}
	}

	// 输出最佳投资方案
	console.log(bestInvestments.join(' '));
});
