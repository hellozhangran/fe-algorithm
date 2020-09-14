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
<<<<<<< HEAD
 const list = [1, 3, 6, 4, 2, 9, 11, 10, 13];
 console.log(oddEvenList(list));
 // [ 1, 3, 13, 11, 9, 2, 4, 10, 6 ]


 // 只用一层while循环的方法
 function oddEvenList2(list) {
     let left = 0;
     let right = list.length - 1;
     let leftTag = false;
     let rightTag = false;
     while(left < right) {
         if (list[left]%2 === 1 && !leftTag) {
            left++;
         } else {
            leftTag = true;
         }
         if (list[right]%2 === 0 && !rightTag) {
             right--;
         } else {
             rightTag = true
         }
         if (leftTag && rightTag) {
            [list[left], list[right]] = [list[right], list[left]];
            leftTag = false;
            rightTag = false;
         }
     }
     return list;
}
=======
//  const list = [1, 3, 6, 4, 2, 9, 11, 10, 13];
 // console.log(oddEvenList(list));
 // [ 1, 3, 13, 11, 9, 2, 4, 10, 6 ]


 /**
  * 题目2：输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，
  * 如果有多对数字的和等于S，输出两个数的乘积最小的。
  * 
  * 思路：因为题目中说两个数的乘积要比较小，所以优先从两头取
  */

function findArray(list, sum) {
    if(list && list.length > 1) {
        let left = 0;
        let right = list.length - 1;
        while(left < right) {
            let s = list[left] + list[right];
            if(s < sum) {
                left++;
            } else if(s > sum){
                right--;
            } else {
                return [list[left], list[right]];
            }
        }
    }
    return [];
}

let list = [1, 2, 4, 5, 7, 8, 9];
let sum = 10;
console.log(findArray(list, sum));
>>>>>>> c5daf9238142fe5c636cc44fdbc1bf050d276e5d
