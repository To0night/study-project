/* 
程序员小明打了一辆出租车去上班。出于职业敏感，他注意到这辆出租车的计费表有点问题，总是偏大。

出租车司机解释说他不喜欢数字4，所以改装了计费表，任何数字位置遇到数字4就直接跳过，其余功能都正常。

比如：

23再多一块钱就变为25；
39再多一块钱变为50；
399再多一块钱变为500； 小明识破了司机的伎俩，准备利用自己的学识打败司机的阴谋。
给出计费表的表面读数，返回实际产生的费用。

输入描述
只有一行，数字N，表示里程表的读数。

(1<=N<=888888888)。

输出描述
一个数字，表示实际产生的费用。以回车结束。
*/

/* JavaScript Node ACM模式 控制台输入获取 */
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
/* 
考的是9进制的数
n为13 1*9^1+3*9^0
n为156 1*9^2+(5-1)*9^1+(6-1)*9^0
*/
rl.on('line', (line) => {
	const arr = line.split('').map((ele) => parseInt(ele));
	let correct = 0;
	for (let i = 0; i < arr.length; i++) {
		// 遍历输入数的每一位
		let fault = arr[i];
		if (fault > 4) {
			// 如果本位数比4大，则相当于跳过1次，则需要将本位数-1
			fault--;
		}
		for (let j = arr.length - i - 1; j > 0; j--) {
			// 将本位转成十进制
			fault *= 9;
		}
		correct += fault; // 累加各位对应十进制数
	}
	console.log(correct);
});
