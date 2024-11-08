/* 
5
5000 2000 5000 8000 1800

3
*/

class TreeNode {
	// 构造函数：创建树节点
	constructor(val) {
		this.val = val; // 节点值
		this.left = this.mid = this.right = null; // 初始化左、中、右子节点为null
	}
}

class Tree {
	// 插入方法：向树中插入值
	insert(root, val) {
		if (root === null) {
			return new TreeNode(val); // 如果根节点为空，创建新节点作为根节点
		}
		if (val < root.val - 500) {
			root.left = this.insert(root.left, val); // 如果值小于根节点值减500，插入到左子树
		} else if (val > root.val + 500) {
			root.right = this.insert(root.right, val); // 如果值大于根节点值加500，插入到右子树
		} else {
			root.mid = this.insert(root.mid, val); // 如果值在根节点值加减500范围内，插入到中间子树
		}
		return root; // 返回根节点
	}

	// 获取树的高度
	getHeight(root) {
		if (root === null) {
			return 0; // 如果根节点为空，高度为0
		}
		let leftHeight = this.getHeight(root.left); // 计算左子树的高度
		let midHeight = this.getHeight(root.mid); // 计算中间子树的高度
		let rightHeight = this.getHeight(root.right); // 计算右子树的高度
		return Math.max(leftHeight, midHeight, rightHeight) + 1; // 返回三者中最大的高度加1
	}
}

// 主程序
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

const tree = new Tree();
let root = null;

readline.on('line', (N) => {
	N = parseInt(N);
	readline.on('line', (nums) => {
		nums.split(' ').forEach((num) => {
			root = tree.insert(root, parseInt(num)); // 将每个整数插入树中
		});
		const height = tree.getHeight(root); // 获取树的高度
		console.log(height); // 输出树的高度
		readline.close();
	});
});
