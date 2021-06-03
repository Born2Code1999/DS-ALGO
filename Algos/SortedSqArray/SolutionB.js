function sortedSquaredArray(array) {
    var arr = array.map(x => x);
    var smallerIdx = 0;
    var biggerIdx = arr.length - 1;

    for(var i = arr.length-1 ; i > 0; i--){
        var smallerVal = array[smallerIdx]; 
        var biggerVal = array[biggerIdx];

        if(Math.abs(smallerVal) > Math.abs(biggerVal)){
            arr[i] = smallerVal * smallerVal;
            smallerIdx++;
        }else{
            arr[i] = biggerVal * biggerVal;
            biggerIdx--;
        }
    }


    return arr;
  }
// var arr1 = [-9,-6,2,4,7];
// console.log(sortedSquaredArray(arr1));