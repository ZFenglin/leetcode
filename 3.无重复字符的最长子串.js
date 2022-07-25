/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
var lengthOfLongestSubstring = function (s) {
    let l = 0, r = -1
    let res = 0
    const set = new Set()
    while (l < s.length) {
        if (r + 1 < s.length && !set.has(s[r + 1])) {
            // 下一个set中不存在则添加
            set.add(s[++r])
        } else {
            // 否则删除之前
            set.delete(s[l++])
        }
        // 处理最大长度
        res = Math.max(res, r - l + 1)
    }
    return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end