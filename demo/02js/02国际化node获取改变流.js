const fs = require('fs');
const path = require('path');

const filePath = './demo.js' && path.join(__dirname, './demo.js');
const extname = path.extname(filePath);

// 创建一个可读流和一个可写流（同一文件）
const readStream = fs.createReadStream(filePath);
const writeStream = fs.createWriteStream(filePath + '.tmp');

const { Transform } = require('stream');
// 创建一个 Transform 流
const transformStream = new Transform({
	transform(chunk, encoding, callback) {
		// 将数据转换为字符串
		const modifiedChunk = chunk.toString().replace(/111/g, 'zzz'); // 例如，将 'foo' 替换为 'bar'
		this.push(modifiedChunk); // 将修改后的数据推送到下一个流
		callback(); // 标记处理完成
	},
});
readStream.pipe(transformStream).pipe(writeStream);

if (extname === '.js') {
	console.log('This is a JS file.');

	writeStream.on('finish', () => {
		console.log('Finished JS');
		// 完成后用新文件替换原文件
		fs.rename(filePath + '.tmp', filePath, (err) => {
			if (err) {
				console.error('Error renaming file:', err);
			} else {
				console.log('改写成功');
			}
		});
	});
} else if (extname === '.vue') {
	console.log('This is a Vue file.');
} else {
	console.log('This is neither a Vue nor a JavaScript file.');
}

// 获取文件夹内的所有文件流
// 定义目标文件夹路径
const directoryPath = 'path/to/your/directory'; // 替换为你的文件夹路径
// 读取文件夹中的所有文件
fs.readdir(directoryPath, (err, files) => {
	if (err) {
		return console.error('Error reading directory:', err);
	}

	files.forEach((file) => {
		const filePath = path.join(directoryPath, file);

		// 检查是否为文件
		fs.stat(filePath, (err, stat) => {
			if (err) {
				return console.error('Error stating file:', err);
			}
			if (stat.isFile()) {
				// 创建可读流
				const readStream = fs.createReadStream(filePath);

				readStream.on('data', (chunk) => {
					console.log(`Reading ${file}:`, chunk.toString());
				});

				readStream.on('end', () => {
					console.log(`Finished reading ${file}.`);
				});

				readStream.on('error', (err) => {
					console.error('Error reading file:', err);
				});
			}
		});
	});
});
