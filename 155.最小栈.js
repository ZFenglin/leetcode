/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function () {
    this.arr = []
    this.minArr = [Infinity]
};


/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.minArr.push(Math.min(val, this.getMin()))
    this.arr.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.minArr.pop()
    this.arr.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.arr[this.arr.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minArr[this.minArr.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end


// @after-stub-for-debug-begin
module.exports = MinStack;
// @after-stub-for-debug-end