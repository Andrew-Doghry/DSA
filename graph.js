class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
            return true;
        }
        return false;
    }
    addEdge(v1,v2){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            if(this.adjacencyList[v1].indexOf(v2)===-1){
                this.adjacencyList[v1].push(v2);
                this.adjacencyList[v2].push(v1);
                return true;
            }
        }
        return false;
    }
    removeEdge(v1,v2){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            if(this.adjacencyList[v1].indexOf(v2)>=0){
                this.adjacencyList[v1] = this.adjacencyList[v1].filter(e=>e==v2 ? false:true);
                this.adjacencyList[v2] = this.adjacencyList[v2].filter(e=>e==v1 ? false:true);
            }
        }
        return false;
    }
    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            delete this.adjacencyList[vertex]
            for(let i in this.adjacencyList){
                this.adjacencyList[i] = this.adjacencyList[i].filter(e=>e==vertex?false:true)
            }
            return true;
        }
        return false;


    }
}
let myGraph = new Graph();
console.log(myGraph.addVertex('A'))
console.log(myGraph.addVertex('B'))
console.log(myGraph.addVertex('c'))
console.log(myGraph.addVertex('F'))
console.log(myGraph.addEdge('A','F'))
console.log(myGraph.addEdge('A','B'))
console.log(myGraph.addEdge('c','B'))
console.log(myGraph.removeEdge('A',"F"))
console.log(myGraph.addEdge('A','c'))
console.log(myGraph.removeVertex('A'))
console.log(myGraph.adjacencyList)

let giftBox = ['open','open','open','open','open','gift'];
function openGift(giftBox,index=0){
    if(giftBox[index] == 'gift') return index;
    return openGift(giftBox,++index)
    // return here to end the parent function 
}

console.log(openGift(giftBox))
console.log(giftBox[5])

function factorial(n){
    if(n == 1){
        return 1;
    }
    return n * factorial(n-1)
}
console.log(factorial(4))


/*
n=4
n=3
n=2
n=1 return 1
the first function is that with n = 1 
then n=2
then n=3
then n=4

1 * 2
2* 3
6*4
return 24


*/
