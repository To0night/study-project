// 浅拷贝
function shallowCopy(obj) {
	if (typeof obj !== 'object' || obj !== null) {
		return obj;
	}
	return Object.assign({}, obj);
}
// 深拷贝
// for in 遍历key
// for of 遍历value
function deepCopy(obj) {
	if (typeof obj !== 'object' || obj !== null) {
		return obj;
	}
	if (obj instanceof Date) {
		return new Date(obj);
	}
	if (obj instanceof RegExp) {
		return new RegExp(obj);
	}
	let newObj = Array.isArray(obj) ? [] : {};
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			newObj[key] = deepCopy(obj[key]);
		}
	}
	return newObj;
}
