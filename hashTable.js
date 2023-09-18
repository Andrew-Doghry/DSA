class HashTable {
    constructor(size = 7){
        this.arr = new Array(size).fill(null)
    }
    setHash(key){
        return (key.length)%this.arr.length;
    }
    set(obj,index=null){
        if(index == null){
            index = this.setHash(Object.keys(obj)[0]);
        }
        let check = this.arr.some(e=>{
            return e == null;
        })
        if(check){
            if(this.arr[index] == null){
                // console.log(...Object.entries(obj))
                
                this.arr[index] = Object.entries(obj)[0]
                return ;
            }
        }else {
            return false;
        }
        index++;
        return this.set(obj,(index%this.arr.length))//chaining not collasing 
        // this.arr[index].push(Object.entries(obj))//coallasing not chaining 
    }
}