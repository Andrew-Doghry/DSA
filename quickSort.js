function pivot(arr,pivotIndex = 0 , endIndex = arr.length-1){
    let swapIndex = pivotIndex;
    for(let i = pivotIndex+1; i<= endIndex;i++){
        if(arr[i] < arr[pivotIndex]){
            swapIndex++;
            [arr[i],arr[swapIndex]]=[arr[swapIndex],arr[i]]
            arr;
        }
    }
    [arr[pivotIndex],arr[swapIndex]]=[arr[swapIndex],arr[pivotIndex]]
    // the new pivot index is the swap index now
    return swapIndex;
}
function quickSort(arr,left = 0 ,right = arr.length-1){
    if(left<right){
        let pivotIndex = pivot(arr,left,right);
        quickSort(arr,left,pivotIndex-1<0?0:pivotIndex-1)
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}
let arr = [4,5,3,2,7,6,1,0.8];
quickSort(arr);
console.log(arr)