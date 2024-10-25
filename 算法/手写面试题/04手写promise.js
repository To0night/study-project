// 三个状态
// 状态的变化
/* 
这个简化的 MyPromise 实现包括了以下基本功能：

executor 函数接受 resolve 和 reject 两个参数，并立即执行。
resolve 和 reject 函数用于改变 Promise 的状态，并触发相应的回调函数。
then 方法用于指定 Promise 成功或失败时要执行的回调函数，并返回一个新的 Promise 对象。
MyPromise.resolve 和 MyPromise.reject 是两个静态方法，用于创建已经解决或拒绝的 Promise 对象。

这个实现省略了很多特性，比如链式调用、错误冒泡、catch 方法、finally 方法、以及微任务队列的处理等
*/
class MyPromise {
	constructor(executor) {
		this.state = 'pending'; // pending fulfilled rejected
		this.value = undefined; // 成功时的值
		this.reason = undefined; // 失败时的原因
		this.onFulfilledCallbacks = []; // 成功时的回调
		this.onRejectedCallbacks = []; // 失败时的回调

		const resolve = (value) => {
			if (this.state === 'pending') {
				this.state = 'fulfilled';
				this.value = value;
				this.onFulfilledCallbacks.forEach((callback) => callback(value));
			}
		};
		const reject = (value) => {
			if (this.state === 'pending') {
				this.state = 'rejected';
				this.reason = value;
				this.onRejectedCallbacks.forEach((callback) => callback(value));
			}
		};

		// 执行传入的 executor 函数默认参数
		try {
			executor(resolve, reject);
		} catch (error) {
			reject(error);
		}
	}

	then(onFulfilled, onRejected) {
		return new MyPromise((resolve, reject) => {
			const handleFulfilled = () => {
				try {
					const result = onFulfilled(this.value);
					resolve(result);
				} catch (err) {
					reject(err);
				}
			};
			const handleRejected = () => {
				try {
					const result = onRejected(this.reason);
					reject(result);
				} catch (err) {
					reject(err);
				}
			};
			if (this.state === 'fulfilled') {
				handleFulfilled();
			} else if (this.state === 'rejected') {
				handleRejected();
			} else {
				this.onFulfilledCallbacks.push(handleFulfilled);
				this.onRejectedCallbacks.push(handleRejected);
			}
		});
	}
}

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log(1111);
		resolve('success');
	}, 1000);
});

promise.then(
	(res) => {
		console.log(res, 111);
	},
	(err) => {
		console.log(err, 222);
	}
);

class MyPromise2 {
	constructor(executor) {
		this.state = 'pending';
		this.value = undefined;
		this.reason = undefined;
		this.onFulfilledCallbacks = [];
		this.onRejectedCallbacks = [];
		const resolve = (value) => {
			if (this.state === 'pending') {
				this.state = 'fulfilled';
				this.value = value;
				this.onFulfilledCallbacks.forEach((callback) => callback());
			}
		};
		const reject = (reason) => {
			if (this.state === 'pending') {
				this.state = 'rejected';
				this.reason = reason;
				this.onRejectedCallbacks.forEach((callback) => callback());
			}
		};
		try {
			executor.call(this, resolve, reject);
		} catch (err) {
			reject(err);
		}
	}
	then(onFulfilled, onRejected) {
		return new MyPromise2((resolve, reject) => {
			const handleFulfilled = (value) => {
				try {
					const result = onFulfilled(this.value);
					resolve(result)
				} catch (err) {
					reject(err);
				}
			};
			const handleRejected = (reason) => {
				try {
					const result = onRejected(this.reason);
					reject(result)
				} catch (err) {
					reject(err);
				}
			};
			if (this.state === 'fulfilled') {
				handleFulfilled();
			} else if (this.state === 'rejected') {
				handleRejected();
			} else {
				this.onFulfilledCallbacks.push(handleFulfilled);
				this.onRejectedCallbacks.push(handleRejected);
			}
		});
	}
}
