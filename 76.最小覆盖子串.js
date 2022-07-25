/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 滑动窗口
var minWindow = function (s, t) {
    if (t.length > s.length) return ""
    const need = {}, win = {}
    for (const a of t) {
        need[a] = (need[a] || 0) + 1
    }
    let l = 0, r = 0
    let valid = 0
    let len = Number.MAX_VALUE, start = 0
    while (r < s.length) {
        const c = s[r]
        r++
        if (need[c]) {
            win[c] = (win[c] || 0) + 1
            if (need[c] === win[c]) {
                valid++
            }
        }
        while (valid === Object.keys(need).length) {
            if (r - l < len) {
                start = l
                len = r - l
            }
            let d = s[l]
            l++
            if (need[d]) {
                if (win[d] === need[d]) {
                    valid--
                }
                win[d]--
            }
        }
    }
    return len === Number.MAX_VALUE ? "" : s.substr(start, len)

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minWindow;
// @after-stub-for-debug-end