// promise
// any至这个 Promise 会在其中至少一个 Promise 成功时解析，并返回该成功的值；
// 如果所有 Promise 都失败，则返回一个拒绝的 Promise，并且拒绝原因是一个 AggregateError，其中包含所有失败的原因。
// race一个成功或失败就返回
// all所有成功 有一个失败即返回
function myPromiseAll(promiseArr) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(promiseArr)) {
			return reject(new TypeError('Argument must be an array'));
		}
		const result = [];
		let completed = 0;
		promiseArr.forEach((item, index) => {
			// 确保处理的是 Promise
			Promise.resolve(item)
				.then((value) => {
					result[index] = value; // 保存结果
					completed++;
					if (completed === promiseArr.length) {
						resolve(result);
					}
				})
				.catch((err) => {
					reject(err); //  一旦出现失败 直接reject
				});
		});
		// 如果传入空数组，立即resolve
		if (promiseArr.length === 0) {
			resolve(result);
		}
	});
}

// 示例用法
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);

myPromiseAll([p1, p2, p3])
	.then((results) => {
		console.log(results); // 输出: [1, 2, 3]
	})
	.catch((error) => {
		console.error(error);
	});

function promiseAll2(arr) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(arr)) {
			reject('must is a array');
		}
		let result = [];
		let num = 0;
		arr.forEach((item, index) => {
			Promise.resolve(item)
				.then((res) => {
					result[index] = res;
					num++;
					if (num === arr.length) {
						resolve(result);
					}
				})
				.catch((err) => reject(err));
		});
		if (arr.length === 0) {
			resolve(result);
		}
	});
}
