let arr = [1, 2, 3, 2, 4, 2, 4];

function uniqueArray1(arr) {
	return [...new Set(arr)];
}

function uniqueArray2(arr) {
	return arr.filter((item, index) => arr.indexOf(item) === index);
}

function uniqueArray3(arr) {
	return arr.reduce((accumulator, item, index) => {
		if (!accumulator.includes(item)) {
			accumulator.push(item);
		}
		return accumulator;
	}, []);
}

console.log(uniqueArray2(arr), arr.indexOf(2));
