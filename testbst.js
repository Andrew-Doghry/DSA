// recursive deployement
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root  = null;
    }
    insert(value){
        let newNode = new Node(value)
        if(this.root == null){ 
            this.root = newNode
            return this;
        };
        let temp = this.root;
        while(true){
            if(value === temp.value) return undefined;
            if(value<temp.value){
                if(temp.left === null){
                    temp.left = newNode
                    return this;
                }
                temp = temp.left;
            }
            if(value>temp.value){
                if(temp.right === null){
                temp.right = newNode
                return this;
            }
            temp= temp.right;
            }
        }
    }
    // contains(value){
    //     let temp = this.root;
    //     while(true){
    //     if(temp ==null) return false;
    //     if(temp.value == value)return true   
    //     if(value<temp.value)temp=temp.left;
    //     if(value>temp.value)temp=temp.right
    //     }
    // }
    // get min(){
    //     let temp = this.root;
    //     while(true){
    //         if(temp.left == null) return temp;
    //         temp = temp.left;
    //     }
    // }
    // get max(){
    //     let temp = this.root;
    //     while(true){
    //         if(temp.right ==null)return temp;
    //         temp = temp.right;
    //     }
    // }
    contains(key,rt=this.root){
        let temp = rt;
        if(temp == null) return false;
        if(temp.value == key) return true;
        if(key < temp.value){
            return this.contains(key,temp.left);
        }
        if(key>temp.value){ 
            return this.contains(key,temp.right)
        }
    }
    min(rt = this.root){
        let temp = rt;
        if(temp.left == null)return temp;
        return this.min(temp.left);
    }
    max(rt = this.root){
        let temp = rt;
        if(temp.right == null) return temp;
        return this.max(temp.right);
    }
    insert(value,temp = this.root){
        let newNode = new Node(value);
        if(this.root == null){
            this.root = newNode;
            return this;
        }
        if(temp.value == value)return null;
        if(value<temp.value){
            if(temp.left == null) {
                temp.left=newNode
                return this;
            }
            return this.insert(value,temp.left);
        }if(value>temp.value){
            if(temp.right == null){
                temp.right = newNode;
                return this;
            }
            return  this.insert(value,temp.right);
        }
    }
    find(key,rt = this.root){
        let temp = rt;
        if(temp == null) return null;
        if(temp.value == key )return temp;
        if(key<temp.value){
            return this.find(key,temp.left);
        }if(key>temp.value){
            return this.find(key,temp.right)
        }
    }
}
const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(11)
bst.insert(8)
bst.insert(7)
bst.insert(6)
console.log(bst.find(10))
