const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    const getMaxTotal = (targetArr, kCount) => {

        // 如果k大于整个数组的长度 返回整个数组的和
        if (new Set(targetArr).size === 1) {
            // 只有一个数
            let result = 0
            for (let i = 0; i < kCount; i++) {
                result += targetArr[i]
            }
            return result
        }
        if (kCount >= targetArr.length) {
            return targetArr.reduce((pre, cur) => pre + cur, 0)
        } else {
            let result = 0
            // 取出第一个数
            do {
                if (targetArr[0] > targetArr[targetArr.length - 1]) {
                    // 队首大于队尾
                    result += targetArr[0]
                    targetArr.shift()
                    kCount--
                }
                else if (targetArr[0] < targetArr[targetArr.length - 1]) {
                    // 队首小于队尾
                    result += targetArr[targetArr.length - 1]
                    targetArr.pop()
                    kCount--
                } else if (targetArr[0] === targetArr[targetArr.length - 1]) {
                    let startIndex = 0;
                    let endIndex = targetArr.length - 1
                    
                    while(targetArr[startIndex] === targetArr[endIndex]){
                        startIndex++;
                        endIndex--;
                        if(startIndex === endIndex){
                            // 对称数
                            let result = 0
                            for (let i = 0; i < kCount; i++) {
                                result += targetArr[i]
                            }
                            return result
                            break
                        }
                    }
                    if (targetArr[startIndex] > targetArr[endIndex]) {
                        // 队首大于队尾
                        result += targetArr[0]
                        targetArr.shift()
                        kCount--
                    } else if (targetArr[startIndex] < targetArr[endIndex]) {
                        result += targetArr[targetArr.length - 1]
                        targetArr.pop()
                        kCount--
                    }
                }
            } while (kCount > 0)
            return result
        }
    }

    console.log(getMaxTotal([1,2,3,4,5,6,1],3))

    console.log(getMaxTotal([2, 2, 2], 2))

    console.log(getMaxTotal([9,7,7,9,7,7,9],7))

    console.log(getMaxTotal([1,10000,1],1))

    console.log(getMaxTotal([1,79,80,1,1,1,200,1],3))

})();
