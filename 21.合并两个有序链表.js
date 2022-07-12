/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// 递归
var mergeTwoLists = function (list1, list2) {
    if (list1 === null) return list2
    if (list2 === null) return list1
    let res
    if (list1.val <= list2.val) {
        res = list1
        res.next = mergeTwoLists(list1.next, list2)
    } else {
        res = list2
        res.next = mergeTwoLists(list1, list2.next)
    }
    return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end