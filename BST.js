class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        // the left nodes are whose values are lesser than the parent value
        this.right = null;
        // the right nodes are whose values are greater than the parent value
    }
}
exports.bst = class BST{
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if(this.root == null){
            this.root = newNode
            return this;
        }
        let temp = this.root;
        while(true){
            if(temp.value == newNode.value)return undefined;
            if(newNode.value<temp.value){
                if(temp.left ==null){
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }
            if(newNode.value > temp.value){
                if(temp.right==null){
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }
    contains(value){
        if(this.root == null)return null;
        let temp = this.root;
        while(true){
            if(temp.value == value) return true;
            if(value<temp.value){
                if(temp.left ==null)return false;
                temp = temp.left
            }
            if(value>temp.value){
                if(temp.right == null)return false;
                temp = temp.right;
            }
        }
    }
    min(){
        if(this.root == null) return null;
        let temp = this.root;
        while(true){
            if(temp.left == null)return temp.value;
            temp = temp.left;
        }
    }
    max(){
        if(this.root == null) return null;
        let temp = this.root;
        while(true){
            if(temp.right == null) return temp.value;
            temp = temp.right;
        }
    }
    BFS(){
        let queue = [],result = [];
        queue.push(this.root);
        while(queue.length){
            let currentNode = queue.shift();
            result.push(currentNode.value);
            if(currentNode.left)queue.push(currentNode.left);
            if(currentNode.right)queue.push(currentNode.right);
        }
        return result;
    }
    dfsPreOrder(){
        let result = [];
        function preorder(currentNode){
          result.push(currentNode.value);
          if(currentNode.left) preorder(currentNode.left);
          if(currentNode.right) preorder(currentNode.right);  
        }
        preorder(this.root)
        return result;
    }
    dfsPostOrder(){
        let result = [];
        function postOrder(currentNode){
            if(currentNode.left) postOrder(currentNode.left);
            if(currentNode.right) postOrder(currentNode.right);  
            result.push(currentNode.value);
        }
        postOrder(this.root)
        return result;
    }
    dfsInOrder(){
        let result = [];
        function inOrder(currentNode){
            if(currentNode.left) inOrder(currentNode.left);
            result.push(currentNode.value);
            if(currentNode.right) inOrder(currentNode.right);  
        }
        inOrder(this.root)
        return result;
    }
}

