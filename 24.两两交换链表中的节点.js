/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let pre = new ListNode(undefined, head)
    let cur = pre
    while (cur.next != null && cur.next.next != null) {
        let node1 = cur.next
        let node2 = cur.next.next
        cur.next = node2
        node1.next = node2.next
        node2.next = node1
        cur = node1
    }
    return pre.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = swapPairs;
// @after-stub-for-debug-end