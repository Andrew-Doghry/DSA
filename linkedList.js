class Node{
    constructor(value){
        this.val = value;
        this.nt = null;
    }
    get value(){
        return this.val
    }
    set value(value){
        this.val = value
    }
    get next(){
        return this.nt
    }
    set next(ntNode){
        this.nt = ntNode
    }
}
class LinkedList{
    constructor(node){
        this.head = node;
        let temp = this.head;
        while(temp.next != null){
            temp = temp.next;
        }
        this.tail = temp;
    }
    push(value){
        let newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode
        return this
    }
    pop(){
        let preDeletedNode = this.head;
        while(preDeletedNode.next.next != null){
            preDeletedNode = preDeletedNode.next;    
        } 
        this.tail = preDeletedNode
        this.tail.next = null;
    }
    unshift(value){
        let newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode
        return this
    }
    shift(){
        this.head = this.head.next;
    }
    length(){
        let count = 0 ;
        let temp = this.head ;
        while (temp!=null){
            count++;
            temp = temp.next;
        }
        return count;
    }
    at(index){
        if(this.length() > index){
            let temp = this.head;
            for (let i = 0 ; i< index;i++){
                temp = temp.next;
            }
            return temp;
        }else{
            return false;
        }
    }
    insert(index,value){
        if(this.length()>index){
            let newNode = new Node(value);
            let temp = this.head;
            for(let i = 0 ; i < index-1;i++){
                temp = temp.next
            }
            newNode.next = temp.next;
            temp.next = newNode;
            return true;
        }
        else{
            return false;
        }
    }
    deleteAtIndex(index){
        if(this.length()>index){
        let temp = this.head;
        for(let i = 0 ; i < index-1;i++){
            temp = temp.next
        }
        let deletedNode = temp.next;
        temp.next = temp.next.next;
        return deletedNode;
    }
    else{
        return false;
        }
    }
    print(){
    let temp = this.head;
    while (temp != null){
        console.log(temp)    
        temp = temp.next
        }
    }
}
exports.LinkedList = LinkedList
exports.Node = Node