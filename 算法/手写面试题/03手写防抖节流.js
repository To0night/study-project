// 防抖
function debounce(func, wait) {
	let timer;
	return function () {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(() => {
			func.apply(this, arguments);
		}, wait);
	};
}

// 使用示例
const myEfficientFn = debounce(function () {
	// 需要防抖执行的函数
	console.log(1111111111);
}, 250);
myEfficientFn(111, 222);
// window.addEventListener('resize', myEfficientFn);

// 节流
function throttle(func, wait) {
	let timer;
	return function () {
		if (timer) {
			return;
		} else {
			setTimeout(() => {
				func.apply(this, arguments);
				clearTimeout(timer);
				timer = null;
			}, wait);
		}
	};
}
