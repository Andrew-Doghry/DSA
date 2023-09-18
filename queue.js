// fifo principle
exports.queue = class Queue{
    #arr;
    constructor(value = null){
        if(value){
            this.#arr = Array.from([value])
        }else{
            this.#arr = new Array();
        }
    }
    get arr(){
        return this.#arr;
    }
    set arr(value){
        this.#arr = value;
    }
    push(value){
        if(this.arr){
            this.arr.push(value)
            return true;
        }
        else{
            return false;
        }
    }
    pop(){
        if(this.arr){
            let val = this.arr[0]        
            for(let i = 0 ; i < this.arr.length;i++){
                this.arr[i]=this.arr[i+1];
            }
            this.arr.length -=1;
            return val;
        }else{
            return false;
        }
    }
    get length(){
        if(this.arr){
            return this.arr.length;
        }else{
            return 0;
        }
    }
    at(index){
        return this.arr[Number.parseInt(index)]
    }
}