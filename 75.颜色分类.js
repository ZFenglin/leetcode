/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 默认排序
var sortColors = function (nums) {
    return nums.sort()
};
// 计数排序
var sortColors = function (nums) {
    let count = [0, 0, 0]
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]]++
    }
    nums.length = 0
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            nums.push(i)
            count[i]--
        }
    }
};
// 三路排序
var sortColors = function (nums) {
    function swap(a, b) {
        const temp = nums[a]
        nums[a] = nums[b]
        nums[b] = temp
    }
    let zero = -1
    let two = nums.length
    let i = 0
    while (i < two) {
        if (nums[i] === 1) {
            i++
        } else if (nums[i] === 2) {
            swap(i, --two)
        } else {
            swap(++zero, i++)
        }
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortColors;
// @after-stub-for-debug-end