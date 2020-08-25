/**
 * * * * * *
 * 快速排序 *
 * * * * * *
 */


/**
 * 思路1：
 * 1. 取出数组中的第一数作为target
 * 2. 创建两个数组：left,right。把原数组中小于target的数依次放到left中，大于target的依次放入right。
 * 3. 对left和right分别做递归操作，最后返回left target right的拼接
 */
function quickSort(list) {
    if(list.length < 2) return list;
    let left = [];
    let right = [];
    let target = list[0];
    for(let i = 1; i < list.length; i++) {
        if(list[i] < target) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }
    return [...quickSort(left), target, ...quickSort(right)];
}

// 测试
// const list = [1,2,3,4,7,2,0,-1,11,54,5,22];
// console.log(quickSort(list));
// 输出结果：[ -1, 0, 1, 2, 2, 3, 4, 5, 7, 11, 22, 54 ]


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

/**
 * 思路2： 参考 https://juejin.im/post/6844903938915827725
 * 1. 数组中最后一个设为target
 * 2. 遍历整个数组，如果比target小，就跟数组索引1的位置交换，继续比，再遇到比target大的，跟索引2位置交换，直到找遍所有<=target的数
 * 3. 经过2的操作，target最左侧全都小于target，右侧全都大于target
 * 4. 找到target最后的位置，并对两侧的数组递归上述操作。
 */

function quickSort2(list, start, end) {
    if (end - start < 1) return list
    let j = start;
    let target = list[end];
    for (let i = start; i <= end; i++) {
        if (list[i] <= target) {
            [list[i], list[j]] = [list[j], list[i]];
            j++
        }
    }
    // 分割位置
    const pos = j - 1;
    quickSort2(list, start, pos - 1);
    quickSort2(list, pos + 1, end);
    return list;
}
// 测试
const list = [1,2,3,4,7,2,0,-1,11,54,5,22];
console.log(quickSort2(list, 0, list.length - 1));
// 输出：[ -1, 0, 1, 2, 2, 3, 4, 5, 7, 11, 22, 54 ]