// // class HashTable {
// //     constructor(size = 7){
// //         this.arr = new Array(size).fill(null)
// //     }
// //     setHash(key){
// //         return (key.length)%this.arr.length;
// //     }
// //     set(obj,index=null){
// //         if(index == null){
// //             index = this.setHash(Object.keys(obj)[0]);
// //         }
// //         let check = this.arr.some(e=>{
// //             return e == null;
// //         })
// //         if(check){
// //             if(this.arr[index] == null){
// //                 // console.log(...Object.entries(obj))
                
// //                 this.arr[index] = Object.entries(obj)[0]
// //                 return ;
// //             }
// //         }else {
// //             return false;
// //         }
// //         index++;
// //         return this.set(obj,(index%this.arr.length))//chaining not collasing 
// //         // this.arr[index].push(Object.entries(obj))//coallasing not chaining 
// //     }
// // }


// class HashTable{
//     constructor(size = 7){
//         this.dataMap = new Array(size)
//     }
//     _hash(key){
//         let hash = 0
//         key = key.trim()
//         for(let i = 0 ; i<key.length;i++){
//             hash = (hash+key.charCodeAt(i)*23)%this.dataMap.length;
//         }
//         return hash;
//     }
//     set(key,value){
//         key = key.trim()
//         let index = this._hash(key);
//     if(this.dataMap[index] == undefined){
//         this.dataMap[index] = new Array();
//     }
//         this.dataMap[index]=[...this.dataMap[index],[key,value]];
//         return this;
//     }
//     get(key){
//         // in built in js hash table which are objects getting values through keys is bigO(1) not bigO(n)         
//         key = key.trim()
//         let index = this._hash(key)
//         let targetRecord = this.dataMap[index];
//         if(targetRecord){
//             for(let i in targetRecord){
//                 if(targetRecord[i][0] == key){
//                     return targetRecord[i][1]
//                 }
//             }
//         }
//         return undefined;
//     }
//     keys(){
//         let keys = [];
//         for(let i in this.dataMap){
//             if(this.dataMap[i]){
//                 for(let j in this.dataMap[i]){
//                     keys.push(this.dataMap[i][j][0])
//                 }
//             }
//         }
//         return keys;
//     }
//     values(){
//         let values = [];
//         for(let i in this.dataMap){
//             if(this.dataMap[i]){
//                 for(let j in this.dataMap[i]){
//                     values.push(this.dataMap[i][j][1])
//                 }
//             }
//         }
//         return values;
//     }
//     entries(){
//         let entries = [];
//         for(let i in this.dataMap){
//             if(this.dataMap[i]){
//                 for(let j in this.dataMap[i]){
//                     entries.push(this.dataMap[i][j])
//                 }
//             }
//         }
//         return entries;
//     }
// }
// let ht = new HashTable();
// ht.set('name',"andrew doghry")
// ht.set('age',21)
// ht.set('gae','sys admin')
// ht.set('helloandrew doghry','welcome')
// console.log(ht._hash('helloandrew doghry'))

// console.log(ht.dataMap)
// console.log(ht.dataMap)
// console.log(ht.get('name'))
// console.log(ht.get('age'))
// console.log(ht.get('helloandrew doghry'))
// console.log(ht.get('helloandrew doghry '))
// // console.log(' '.charCodeAt(0))
// console.log(ht.keys());
// console.log(ht.values());
// console.log(ht.entries());



let arr1 = [,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125,1,3,5,20,15,16,125]
let arr2 = [2,4,100,16,25,1256,254,5]
function findItem(arr1,arr2){
    let startTime = new Date().getTime()
    let result = false;
    for(let i in arr1){
        if(arr2.indexOf(arr1[i])!=-1) result = true;
    }
    let endtime = new Date().getTime()
    console.log( endtime - startTime)
    console.log(endtime )
    return result;
}
console.log(findItem(arr1,arr2))
function findItem2(arr1,arr2){
let startTime = new Date().getTime()
let obj = {}
for(let i in arr1){
    obj[arr1[i]] = true;
}
// }
// big o of 2n
for(let i in arr2){
    if(obj.hasOwnProperty(arr2[i]))result = true;
}
    let endtime = new Date().getTime()
    console.log(endtime-startTime)
return result;
}
// let obj = Object.defineProperties({})
console.log(findItem2(arr1,arr2))