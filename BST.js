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
}