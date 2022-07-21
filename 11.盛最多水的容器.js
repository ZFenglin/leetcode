/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 碰撞指针
var maxArea = function (height) {
    let max = 0
    let l = 0
    let r = height.length - 1
    while (r > l) {
        max = Math.max(max, (r - l) * Math.min(height[l], height[r]))
        if (height[l] <= height[r]) {
            l++
        } else {
            r--
        }
    }
    return max
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxArea;
// @after-stub-for-debug-end