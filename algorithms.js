function bubbleSort(arr){
    for(let i = arr.length-1;i>-1 ;i--){
        for(let j = 0 ; j < i ; j++){
            if(arr[j+1]<arr[j]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
}
function selectionSort(arr){
    let min;
    for(let i = 0 ; i<arr.length-1;i++){
        min = i;
        for(let j = i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min = j;
            }
        }
        [arr[i],arr[min]]=[arr[min],arr[i]];
    }
}
function insertionSort(arr){
    let temp ;
    for(let i = 1 ; i<arr.length;i++){
        temp = arr[i];
        for(var j = i-1;j>-1&&temp>arr[j];j--){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
        }
        arr[j+1] = temp
    }
}
function merge(arr1,arr2){
    let combine = [];
    let i = 0 
    let j = 0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            combine.push(arr1[i]);
            i++;
            continue;
        }
        combine.push(arr2[j]);
        j++;
    }
    while(i < arr1.length){
        combine.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        combine.push(arr2[j]);
        j++;
    }
    return combine;
}
function mergeSort(arr){
    if(arr.length === 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left =arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge( mergeSort(left) , mergeSort(right));
}
function pivot(arr,pivotIndex = 0,endIndex = arr.length-1){
    let swapIndex = pivotIndex;
    for(let i = pivotIndex+1;i<=endIndex;i++){
        if(arr[i]<arr[swapIndex]){
            swapIndex++;
            [arr[i],arr[swapIndex]]=[arr[swapIndex],arr[i]];
        }
    }
    [arr[pivotIndex],arr[swapIndex]]=[arr[swapIndex],arr[pivotIndex]];
    return swapIndex;
}
function quickSort(arr,left = 0 , right = arr.length - 1){
    if(left<right){
        let pivotIndex = pivot(arr,left,right);
        quickSort(arr,left,pivotIndex-1);
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}
// exports.sortingAlgos = {bubbleSort,selectionSort,insertionSort,mergeSort,quickSort};

function binarySearch(arr,key,left = 0,right = arr.length){
    if(left < right){
        let mid = Math.floor((right+left)/ 2);
        if(arr[mid] === key) return true;
        if(key<arr[mid]) return binarySearch(arr,key,left,mid-1);
        if(key>arr[mid]) return binarySearch(arr,key,mid+1,right);
    }
    return false;
}
function linearSearch(arr,key){
    for(let i = 0 ;i<arr.length;i++){
        if(arr[i] === key){
            return true;
        }
    }
    return false;
}
let arr = [20,2]
// exports.searchingAlgos = {linearSearch,binarySearch};
exports.algos = {bubbleSort,selectionSort,insertionSort,mergeSort,quickSort,linearSearch,binarySearch}
