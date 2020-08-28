/**
 * 手写bind
 */

// 先要明白bind有什么特性
let a = {name: 'ran'};
let print = function(a, b) {
    console.log(this.name, a, b)
}
print.bind(a, 1, 2)();
// 打印出 ran 1 2
print.bind(a, 1)(2);
// 打印出 ran 1 2

// 接下来自己写一个mybind，实现上面的逻辑
Function.prototype.mybind = function(obj, ...args1) {
    const that = this;
    return function(...args2) {
        return that.apply(obj, [...args1, ...args2]);
    }
}

// 不使用...操作
Function.prototype.mybind1 = function(obj) {
    const slice = Array.prototype.slice;
    const args = slice.call(arguments, 1);
    const that = this;
    return function() {
        const args2 = slice.call(arguments);
        return that.apply(obj, args.concat(args2));
    }
}