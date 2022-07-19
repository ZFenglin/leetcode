/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 排序取倒数
var findKthLargest = function (nums, k) {
    nums.sort((a, b) => b - a)
    return nums[k - 1]
};
// 
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findKthLargest;
// @after-stub-for-debug-end