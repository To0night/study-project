/* 
4 10
1 1
2 1
3 1
4 -2

12
*/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
let n = 0, e = 0;
rl.on('line', (line) => {
  lines.push(line);
  if (lines.length === 1) {
    [n, e] = line.split(' ').map(Number);
    if (e === 0) {
      console.log(0);
      lines = [];
    }
  }
  if (e !== 0 && n !== 0 && lines.length === n + 1) {
    lines.shift();
    // 求出每个横轴单位上的offsetY偏移值，如果输入未给定offsetY，则相当于offsetY=0
    const offsets = new Array(e).fill(0);
    for (const line of lines) {
      const [x, offsetY] = line.split(' ').map(Number);
      offsets[x] = offsetY;
    }
    const dp = new Array(e).fill(0);
    dp[0] = offsets[0];
    for (let i = 1; i < e; i++) {
      dp[i] = offsets[i] + dp[i - 1];
    }
    let ans = 0;
    for (const num of dp) {
      // 计算绝对值
      ans += Math.abs(num);
    }
    console.log(ans);
    lines = [];
  }
});
