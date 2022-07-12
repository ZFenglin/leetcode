/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// 双指针
var partition = function (head, x) {
    let s = new ListNode(0)
    const sh = s
    let l = new ListNode(0)
    const lh = l
    while (head) {
        if (head.val < x) {
            s.next = head
            s = s.next
        } else {
            l.next = head
            l = l.next
        }
        head = head.next
    }
    l.next = null
    s.next = lh.next
    return sh.next
};
// @lc code=end

