/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// // 非零提前，最后赋值0
// var moveZeroes = function (nums) {
//     let l = 0, r = 0
//     while (r < nums.length) {
//         if (nums[r] !== 0) {
//             nums[l++] = nums[r]
//         }
//         r++
//     }
//     while (l < nums.length) {
//         nums[l++] = 0
//     }
// };
// 零与非零交换
var moveZeroes = function (nums) {
    let l = 0, r = 0
    while (r < nums.length) {
        if (nums[r] !== 0) {
            let temp = nums[l]
            nums[l] = nums[r]
            nums[r] = temp
            l++
        }
        r++
    }
};

moveZeroes([2, 1])
// @lc code=end

