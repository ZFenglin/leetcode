/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
// // 栈
// var reverseList = function (head) {
//     const stack = []
//     while (head) {
//         stack.push(head)
//         head = head.next
//     }
//     if (stack.length) {
//         let start = stack.pop()
//         let temp = start;
//         while (stack.length) {
//             temp.next = stack.pop()
//             temp = temp.next
//         }
//         temp.next = null
//         return start
//     }
//     return null
// }
// 双指针
var reverseList = function (head) {
    let prev = null
    let current = head
    while (current) {
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
};
// @lc code=end

