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
    const temp = new ListNode(-1);
    temp.next = head;

    let pre = temp;
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }

    let rightNode = pre;
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next;
    }

    let leftNode = pre.next;
    let rightNodeNext = rightNode.next;

    pre.next = null;
    rightNode.next = null;

    reverseLinkedList(leftNode);

    // 第 5 步：接回到原来的链表中
    pre.next = rightNode;
    leftNode.next = rightNodeNext;
    return temp.next;
};
const reverseLinkedList = (head) => {
    let pre = null;
    let cur = head;

    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseBetween;
// @after-stub-for-debug-end