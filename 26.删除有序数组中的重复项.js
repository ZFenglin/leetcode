/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 双指针
var removeDuplicates = function (nums) {
    let l = 0, r = 0
    while (r < nums.length) {
        if (nums[r] > nums[l]) {
            nums[++l] = nums[r]
        }
        r++
    }
    nums.length = l + 1
};
// @lc code=end

