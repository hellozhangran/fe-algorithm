/**
 * 创建一个二叉树
 */


/**
 * 最开始自己想根据数组来创建一个二叉树，注意不是搜索二叉树！但无奈搞不定啊，先记录到这里吧
 * https://juejin.im/post/6865556893637541902
 */

/**
 * 创建搜索二叉树
 */

class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    insert(data) {
       let node = new Node(data, null, null);
       if(this.root === null) {
           this.root = node;
       } else {
           let current = this.root;
           let parent;
           while(true) {
               parent = current;
               if(!current.left){
                   parent.left = node;
                   current = parent.left;
                   break;
               } else if(!current.right){
            
               } else {

               }
           }
       }
    }
}



