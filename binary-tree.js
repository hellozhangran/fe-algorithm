/**
 * 创建一个二叉树
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



