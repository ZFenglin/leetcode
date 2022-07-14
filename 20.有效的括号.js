/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) {
        return false
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (!isLeft(element)) {
            stack.push(element)
        } else {
            if (stack.length === 0) return false
            if (element !== getMatch(stack.pop())) return false
        }
    }
    return stack.length === 0
};

var isLeft = function (s) {
    return s === '}' || s === ']' || s === ')'
}
var getMatch = function (s) {
    switch (s) {
        case '(':
            return ')'
        case '[':
            return ']'
        case '{':
            return '}'

    }
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end