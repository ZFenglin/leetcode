/*
* @lc app=leetcode.cn id=92 lang=javascript
*
* [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    // 找到需要反转的开头结尾
    const temp = new ListNode(-1)
    temp.next = head
    let pre = temp // 左边前一个节点
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next
    }

    let rightNode = pre // 右边节点
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next
    }
    // 断开链接反转链表
    let leftNode = pre.next // 左边节点
    let rightNodeNext = rightNode.next // 右边后一个节点
    pre.next = null
    rightNode.next = null
    reverseLinkedList(leftNode)
    // 重新连接
    pre.next = rightNode
    leftNode.next = rightNodeNext
    return temp.next
};
const reverseLinkedList = (head) => {
    let pre = null
    let current = head
    while (current) {
        const next = current.next
        current.next = pre
        pre = current
        current = next
    }
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseBetween;
// @after-stub-for-debug-end