// // exports.pq = class PriorityQueueMin{
// exports.MinHeap = class MinHeap{
//     constructor(value = null){
//         if(value == null){
//             this.arr = new Array();
//         }else if( value.constructor == Array) {
//             this.arr = new Array();
//             for(let i in value ){
//                 this.push(value[i]);
//             }
//         }else{
//             this.arr = [value];
//         }
//     }
//     RightChildIdx(index){
//         return ((index*2)+2);
//     }
//     LeftChildIdx(index){
//         return ((index * 2) +1);
//     } 
//     parentIdx(index){
//         return (Math.ceil(index/2)-1);
//     }
//     get length(){
//         return this.arr.length
//     }
//     #heapifyUp(index){
//         if(index >= 0){
//             let curr = this.arr[index]
//             let parentIdx = this.parentIdx(index);
//             let parent = this.arr[parentIdx];
//             if(index %2 == 0){
//                 let RightChildIdx = this.RightChildIdx(parentIdx);
//                 const RightChild = this.arr[RightChildIdx]
//                 if(parent>curr){
//                     [this.arr[parentIdx],this.arr[index]]= [this.arr[index],this.arr[parentIdx]] 
//                     return this.#heapifyUp(parentIdx);
//                 }
//             }else{
//                 let leftChildIdx = this.LeftChildIdx(parentIdx);
//                 if(parent>curr){
//                     [this.arr[parentIdx],this.arr[index]] = [this.arr[index],this.arr[parentIdx]]
//                     return this.#heapifyUp(parentIdx)
//                 }
//             }
//         }
//     }
//     #heapifyDown(index){
//         if(index<this.arr.length){
//             const curr = this.arr[index];
//             const RightChildIdx = this.RightChildIdx(index);
//             const leftChildIdx = this.LeftChildIdx(index);
//             const rtChild = this.arr[RightChildIdx]
//             const ltChild = this.arr[leftChildIdx]
//             if(curr>rtChild && rtChild < ltChild){
//                 // the parent will be the right child
//                 [this.arr[index],this.arr[RightChildIdx]]=[this.arr[RightChildIdx],this.arr[index]];
//                 // then heapifyDown the right child index
//                 return this.#heapifyDown(RightChildIdx);
//             }
//             if(curr>ltChild && ltChild < rtChild){
//                 // the parent will be the left child
//                 [this.arr[index],this.arr[leftChildIdx]]=[this.arr[leftChildIdx],this.arr[index]]
//                 // then heapifyDown the left child index
//                 return this.#heapifyDown(leftChildIdx)
//             }
//         }

//     }
//     push(value){
//         this.arr.push(value);
//         this.#heapifyUp(((this.length)-1))
//     }
//     pop(){
//         this.arr.shift();
//         this.#heapifyDown(0)
//     }
// }
// // exports.pq = class PriorityQueueMin{
// exports.MinHeap = class MinHeap{
//     constructor(value = null){
//         if(value == null){
//             this.arr = new Array();
//         }else if( value.constructor == Array) {
//             this.arr = new Array();
//             for(let i in value ){
//                 this.push(value[i]);
//             }
//         }else{
//             this.arr = [value];
//         }
//     }
//     RightChildIdx(index){
//         return ((index*2)+2);
//     }
//     LeftChildIdx(index){
//         return ((index * 2) +1);
//     } 
//     parentIdx(index){
//         return (Math.ceil(index/2)-1);
//     }
//     get length(){
//         return this.arr.length
//     }
//     #heapifyUp(index){
//         if(index >= 0){
//             let curr = this.arr[index]
//             let parentIdx = this.parentIdx(index);
//             let parent = this.arr[parentIdx];
//             if(index %2 == 0){
//                 let RightChildIdx = this.RightChildIdx(parentIdx);
//                 const RightChild = this.arr[RightChildIdx]
//                 if(parent>curr){
//                     [this.arr[parentIdx],this.arr[index]]= [this.arr[index],this.arr[parentIdx]] 
//                     return this.#heapifyUp(parentIdx);
//                 }
//             }else{
//                 let leftChildIdx = this.LeftChildIdx(parentIdx);
//                 if(parent>curr){
//                     [this.arr[parentIdx],this.arr[index]] = [this.arr[index],this.arr[parentIdx]]
//                     return this.#heapifyUp(parentIdx)
//                 }
//             }
//         }
//     }
//     #heapifyDown(index){
//         if(index<this.arr.length){
//             const curr = this.arr[index];
//             const RightChildIdx = this.RightChildIdx(index);
//             const leftChildIdx = this.LeftChildIdx(index);
//             const rtChild = this.arr[RightChildIdx]
//             const ltChild = this.arr[leftChildIdx]
//             if(curr>rtChild && rtChild < ltChild){
//                 // the parent will be the right child
//                 [this.arr[index],this.arr[RightChildIdx]]=[this.arr[RightChildIdx],this.arr[index]];
//                 // then heapifyDown the right child index
//                 return this.#heapifyDown(RightChildIdx);
//             }
//             if(curr>ltChild && ltChild < rtChild){
//                 // the parent will be the left child
//                 [this.arr[index],this.arr[leftChildIdx]]=[this.arr[leftChildIdx],this.arr[index]]
//                 // then heapifyDown the left child index
//                 return this.#heapifyDown(leftChildIdx)
//             }
//         }

//     }
//     push(value){
//         this.arr.push(value);
//         this.#heapifyUp(((this.length)-1))
//     }
//     pop(){
//         this.arr.shift();
//         this.#heapifyDown(0)
//     }
// }
// exports.pq = class PriorityQueueMin{
class PriorityQueue{
    constructor(value = null){
        if(value == null){
            this.arr = new Array();
        }else if( value.constructor == Array) {
            this.arr = new Array();
            for(let i in value ){
                this.push(value[i]);
            }
        }else{
            this.arr = [value];
        }
    }
    RightChildIdx(index){
        return ((index*2)+2);
    }
    LeftChildIdx(index){
        return ((index * 2) +1);
    } 
    parentIdx(index){
        return (Math.ceil(index/2)-1);
    }
    get length(){
        return this.arr.length
    }
    heapifyUp(index){}
    heapifyDown(index){}
    push(value){
        this.arr.push(value);
        this.heapifyUp(((this.length)-1))
    }
    pop(){
        this.arr.shift();
        this.heapifyDown(0)
        this.reset();
    }
    reset(){
        let temp = this.arr;
        this.arr = [];
        for(let i in temp){
            this.push(temp[i])
        }
    }
}


exports.MinHeap = class MinHeap extends PriorityQueue{
    constructor(value){
        super(value)
    }        
    heapifyUp(index){
        if(index >= 0){
            let curr = this.arr[index]
            let parentIdx = this.parentIdx(index);
            let parent = this.arr[parentIdx];
            if(index %2 == 0){
                let RightChildIdx = this.RightChildIdx(parentIdx);
                const RightChild = this.arr[RightChildIdx]
                if(parent>curr){
                    [this.arr[parentIdx],this.arr[index]]= [this.arr[index],this.arr[parentIdx]] 
                    return this.heapifyUp(parentIdx);
                }
            }else{
                let leftChildIdx = this.LeftChildIdx(parentIdx);
                if(parent>curr){
                    [this.arr[parentIdx],this.arr[index]] = [this.arr[index],this.arr[parentIdx]]
                    return this.heapifyUp(parentIdx)
                }
            }
        }
    }
    heapifyDown(index){
        if(index<=this.arr.length){
            const curr = this.arr[index];
            const RightChildIdx = this.RightChildIdx(index);
            const leftChildIdx = this.LeftChildIdx(index);
            const rtChild = this.arr[RightChildIdx]
            const ltChild = this.arr[leftChildIdx]
            if(curr>rtChild && rtChild < ltChild){
                // the parent will be the right child
                [this.arr[index],this.arr[RightChildIdx]]=[this.arr[RightChildIdx],this.arr[index]];
                // then heapifyDown the right child index
                this.heapifyUp(index);
                // this.heapifyDown(leftChildIdx)
                return this.heapifyDown(RightChildIdx);
            }else if(curr>ltChild && ltChild < rtChild){
                // the parent will be the left child
                [this.arr[index],this.arr[leftChildIdx]]=[this.arr[leftChildIdx],this.arr[index]]
                // then heapifyDown the left child index
                this.heapifyUp(index);
                // this.heapifyDown(RightChildIdx)
                return this.heapifyDown(leftChildIdx)
            }

            return this.heapifyDown(++index)
        }
    }
}
exports.MaxHeap = class MaxHeap extends PriorityQueue{
    constructor(value){
        super(value);
    }
    heapifyDown(index){
        if(index<=this.arr.length){
            const curr = this.arr[index];
            const RightChildIdx = this.RightChildIdx(index);
            const leftChildIdx = this.LeftChildIdx(index);
            const rtChild = this.arr[RightChildIdx]
            const ltChild = this.arr[leftChildIdx]
            if(curr<rtChild && rtChild > ltChild){
                // the parent will be the right child
                [this.arr[index],this.arr[RightChildIdx]]=[this.arr[RightChildIdx],this.arr[index]];
                // then heapifyDown the right child index
                this.heapifyUp(index);
                // this.heapifyDown(leftChildIdx)
                return this.heapifyDown(RightChildIdx);
            }else if(curr<ltChild && ltChild > rtChild){
                // the parent will be the left child
                [this.arr[index],this.arr[leftChildIdx]]=[this.arr[leftChildIdx],this.arr[index]]
                // then heapifyDown the left child index
                this.heapifyUp(index);
                // this.heapifyDown(RightChildIdx)
                return this.heapifyDown(leftChildIdx)
            }

            return this.heapifyDown(++index)
        }
    }
    heapifyUp(index){
        if(index >= 0){
            let curr = this.arr[index]
            let parentIdx = this.parentIdx(index);
            let parent = this.arr[parentIdx];
            if(index %2 == 0){
                let RightChildIdx = this.RightChildIdx(parentIdx);
                const RightChild = this.arr[RightChildIdx]
                if(parent<curr){
                    [this.arr[parentIdx],this.arr[index]]= [this.arr[index],this.arr[parentIdx]] 
                    return this.heapifyUp(parentIdx);
                }
            }else{
                let leftChildIdx = this.LeftChildIdx(parentIdx);
                if(parent<curr){
                    [this.arr[parentIdx],this.arr[index]] = [this.arr[index],this.arr[parentIdx]]
                    return this.heapifyUp(parentIdx)
                }
            }
        }   
    }
    
    
}

const {MinHeap} = this;
const mHeap = new MinHeap(10)
mHeap.push(10)
mHeap.push(9)
mHeap.push(8)
mHeap.push(8.5)
mHeap.pop()

console.log(mHeap.arr);