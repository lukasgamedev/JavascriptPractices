arr1 = [1, 5, 7, 3, 2, 1];
arr2 = [6, 7, 8, 8, 5, 3, 2];

const orderPairs = (arr) => {
    for(let i = 0; i < arr.length; i+=2){
        //check if exists i + 1
        if(i + 1 < arr.length){
            //order pairs
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(orderPairs(arr1));
console.log(orderPairs(arr2));