/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s = s.split('')
    let l = 0
    let r = s.length - 1
    let temp
    while (l < r) {
        while (l <= r && !isVowel(s[l])) {
            l++
        }
        while (r >= l && !isVowel(s[r])) {
            r--
        }
        if (r > l) {
            temp = s[l]
            s[l] = s[r]
            s[r] = temp
            l++
            r--
        }
    }
    return s.join('')
};
const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
function isVowel(s) {
    return set.has(s)
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseVowels;
// @after-stub-for-debug-end