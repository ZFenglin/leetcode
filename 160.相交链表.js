/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function (headA, headB) {
    let setA = new Set()
    let setB = new Set()
    while (headA || headB) {
        if (headA) {
            if (setB.has(headA)) {
                return headA
            }
            setA.add(headA)
            headA = headA.next
        }
        if (headB) {
            if (setA.has(headB)) {
                return headB
            }
            setB.add(headB)
            headB = headB.next
        }
    }
    return null
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = getIntersectionNode;
// @after-stub-for-debug-end