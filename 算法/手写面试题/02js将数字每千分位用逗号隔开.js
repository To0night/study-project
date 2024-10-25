let num = 1234567891234.89;
function splitNum(num, n) {
	let arr = String(num).split('').reverse();
	for (let i = 0; i < arr.length; i++) {
		if ((i - 1) % n === n - 1) {
			console.log(i, arr[i], 111);
			arr[i] += ',';
		}
	}
	console.log(arr);
	return arr.reverse().join('');
}
console.log(splitNum(num, 3), 'return');

let formattedNum = num.toLocaleString();// 'en-US'
console.log(formattedNum, 'true');
