/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 从后往前计数
var merge = function (nums1, m, nums2, n) {
    let i = m + n - 1
    let j = m - 1
    let k = n - 1
    while (j >= 0 || k >= 0) {
        if (j === -1) {
            nums1[i--] = nums2[k--]
        } else if (k === -1) {
            nums1[i--] = nums1[j--]
        } else if (nums1[j] < nums2[k]) {
            nums1[i--] = nums2[k--]
        } else {
            nums1[i--] = nums1[j--]
        }
    }
};
// 额外数组统计再放置回去
var merge = function (nums1, m, nums2, n) {
    const sorted = new Array(m + n).fill(0)
    let p1 = 0
    let p2 = 0
    let i = 0
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            sorted[i++] = nums2[p2++]
        } else if (p2 === n) {
            sorted[i++] = nums1[p1++]
        } else if (nums1[p1] <= nums2[p2]) {
            sorted[i++] = nums1[p1++]
        } else {
            sorted[i++] = nums2[p2++]
        }
    }
    for (let i = 0; i < sorted.length; i++) {
        nums1[i] = sorted[i]

    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end