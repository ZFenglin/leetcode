/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let arr = []
    for (let index = 0; index < lists.length; index++) {
        let linkList = lists[index]
        while (linkList) {
            arr.push(linkList)
            linkList = linkList.next
        }
    }
    if (arr.length === 0) return null
    arr.sort((a, b) => a.val - b.val)
    arr.reduce((prev, curr) => { prev.next = curr; return curr }, arr[0])
    arr[arr.length - 1].next = null
    return arr[0]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeKLists;
// @after-stub-for-debug-end