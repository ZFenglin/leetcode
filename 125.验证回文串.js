/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
var isValid = function (c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
};
// 碰撞指针
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLocaleLowerCase()
    let l = 0
    let r = s.length - 1
    while (l < r) {
        if (!isValid(s[l])) {
            l++
        } else if (!isValid(s[r])) {
            r--
        } else {
            if (s[l] !== s[r]) return false
            l++
            r--
        }
    }
    return true
};
// 反转字符串
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLocaleLowerCase().match(/[a-z0-9]+/g)
    if (!s) {
        return true
    }
    const str = s.join('')
    const rstr = str.split('').reverse().join('')
    return rstr === str
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end