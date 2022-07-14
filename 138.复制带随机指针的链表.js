/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return null
    const map = new Map()
    let cur = head
    while (cur) {
        map.set(cur, new Node(cur.val))
        cur = cur.next
    }
    cur = head
    while (cur) {
        map.get(cur).next = map.get(cur.next) ?? null
        map.get(cur).random = map.get(cur.random) ?? null
        cur = cur.next
    }
    return map.get(head)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = copyRandomList;
// @after-stub-for-debug-end