// lifo principle
exports.stack = class Stack{
    #arr;
    constructor(value = null){
        if(value){
            this.#arr = Array.from([value]) 
        }else{
            this.#arr = new Array();
        }
    }
    get arr(){
        return this.#arr
    }
    set arr(value){
        this.#arr = value;
    }
    get length(){
        return this.#arr.length;
    }
    push(value){
        this.arr.push(value)
        return true;
    }
    pop(){
        return this.arr.pop();
    }
    at(index){
        return this.arr[Number.parseInt(index)]
    }
}