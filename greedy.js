/**
 * 贪心算法
 */

// 最简单的一个贪心算法
/**
 * 题目1：一个字符串son，一个字符串parent，判断son是否为parent的子串。其中子串不必在父串中连续。
 * 实例：son: 'abc', parent: 'a2b1c3' 返回 true
 * 实例：son: 'bcd', parent: 'bcae' 返回false
 */

 function greedy1(son = '', parent = '') {
    let plist = parent.split('');
    let slist = son.split('');
    let i = 0;
    let j = 0;
    let total = 0;
    while(i < slist.length && j < plist.length) {
        if (slist[i] === plist[j]) {
            i++;
            j++;
            total++;
        } else {
            j++;
        }
    }
    return total === slist.length;
 }

 console.log(greedy1('abc', 'aasdbccc')); // true
