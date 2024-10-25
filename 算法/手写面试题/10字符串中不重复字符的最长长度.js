function lengthOfLongestSubstring(s) {
	let start = 0; // 窗口起始位置
	let maxLength = 0; // 最长不重复子串的长度
	let seen = new Set(); // 用于存储窗口内的字符
	for (let end = 0; end < s.length; end++) {
		// 如果当前字符已经在窗口内，则移动窗口的起始位置
		while (seen.has(s[end])) {
			seen.delete(s[start]);
			start++;
		} // 将当前字符添加到窗口内
		seen.add(s[end]); // 更新最长不重复子串的长度
		maxLength = Math.max(maxLength, end - start + 1);
	}
	return maxLength;
}
// 示例
const s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s)); // 输出 3
