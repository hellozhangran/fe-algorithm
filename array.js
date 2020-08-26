/**
 * 数组相关的算法
 */

/**
 * 题目1：输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分。
 * 
 * 思路：left从左往右遍历数组，right从右往左遍历数组，left找到偶数停下，right找到奇数停下，互换
 */

 function oddEvenList(list) {
    let left = 0;
    let right = list.length - 1;
    while(left < right) {
        while(list[left]%2 === 1) {
            left++;
        }
        while(list[right]%2 === 0) {
            right--;
        }
        [list[left], list[right]] = [list[right], list[left]];
    }
    return list;
 }

 // 测试
 const list = [1, 3, 6, 4, 2, 9, 11, 10, 13];
 console.log(oddEvenList(list));
 // [ 1, 3, 13, 11, 9, 2, 4, 10, 6 ]