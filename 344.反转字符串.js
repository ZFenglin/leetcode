/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 对撞指针
var reverseString = function(s) {
     let l = 0
     let r = s.length -1
     let temp
     while (l<r) {
         temp = s[l]
         s[l] = s[r]
         s[r] = temp
         l++
         r--
     }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseString;
// @after-stub-for-debug-end