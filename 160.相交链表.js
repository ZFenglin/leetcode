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
// // set
// var getIntersectionNode = function (headA, headB) {
//     const setA = new Set()
//     const setB = new Set()
//     while (headA || headB) {
//         if (headA) {
//             if (setB.has(headA)) return headA
//             setA.add(headA)
//             headA = headA.next
//         }
//         if (headB) {
//             if (setA.has(headB)) return headB
//             setB.add(headB)
//             headB = headB.next
//         }
//     }
//     return null
// };
// 双指针(有相交就会中途相遇，否则结尾相遇)
var getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) return null
    let pa = headA
    let pb = headB
    while (pa !== pb) {
        pa = pa === null ? headB : pa.next
        pb = pb === null ? headA : pb.next
    }
    return pa
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = getIntersectionNode;
// @after-stub-for-debug-end