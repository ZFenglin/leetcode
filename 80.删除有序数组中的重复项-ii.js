/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 快慢指针
var removeDuplicates = function (nums) {
    if (nums.length < 2) return
    let l = 2, r = 2
    while (r < nums.length) {
        if (nums[l - 2] !== nums[r]) {
            nums[l++] = nums[r]
        }
        r++
    }
    nums.length = l
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end