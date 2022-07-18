/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// // 判断值进行交换，最后修改数组长度
// var removeElement = function (nums, val) {
//     let l = 0, r = 0
//     while (r < nums.length) {
//         if (nums[r] !== val) {
//             nums[l] = nums[r]
//             l++
//         }
//         r++
//     }
//     nums.length = l
// };
// 由于没要求保持原顺序，所以可以直接将val与后续值交换
var removeElement = function (nums, val) {
    let l = 0, r = nums.length
    while (l < r) {
        if (nums[l] === val) {
            nums[l] = nums[r - 1]
            r--
        } else {
            l++
        }
    }
    nums.length = l
};
// @lc code=end

