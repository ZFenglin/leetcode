/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 二分查找
var twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        const n = target - numbers[i]
        // 过滤后续超出可选范围的
        if (n < numbers[i]) {
            return []
        }
        // 二分查找
        let l = i + 1
        let r = numbers.length - 1
        while (r >= l) {
            const mid = l + Math.floor((r - l) / 2)
            if (numbers[mid] === n) {
                return [i + 1, mid + 1]
            } else if (numbers[mid] > n) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }
    return []
};
// 碰撞指针
var twoSum = function (numbers, target) {
    let i = 0
    let j = numbers.length - 1
    while (i < j) {
        const total = numbers[i] + numbers[j]
        if (total === target) {
            return [i + 1, j + 1]
        } else if (total < target) {
            i++
        } else {
            j--
        }
    }
    return []
};
// @lc code=end

