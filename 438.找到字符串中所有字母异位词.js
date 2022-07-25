/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 滑动窗口
var findAnagrams = function (s, p) {
    const need = {}, win = {}
    //  统计需要的异位词
    for (const a of p) {
        need[a] = (need[a] || 0) + 1
    }
    let r = 0, l = 0
    let count = 0
    let res = []
    while (r < s.length) {
        const c = s[r]
        // 右边的字符进入
        r++
        if (need[c]) {
            win[c] = (win[c] || 0) + 1
            if (win[c] === need[c]) {
                count++
            }
        }
        // 长度超出的处理左边字符放出
        while (r - l >= p.length) {
            if (count === Object.keys(need).length) {
                res.push(l)
            }
            const d = s[l]
            l++
            if (need[d]) {
                if (win[d] === need[d]) {
                    count--
                }
                win[d]--
            }
        }
    }
    return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findAnagrams;
// @after-stub-for-debug-end