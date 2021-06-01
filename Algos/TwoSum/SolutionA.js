// O(n^2) time, O(1) space
// returns values
function twoNumberSum(array, targetSum){
    for(let i = 0; i < array.length; i++){
        const firstNum = array[i];
        for(let j = i+1; j < array.length; j++){
            const secondNum = array[j];
            if(firstNum + secondNum == targetSum) return [firstNumber,secondNumber];
        }
    }
    return [];
}

// var array = [111,51,53,53,62,12,345,43,4,100,200];
// var target = 253;
// Should print 52 and 200 in array
// console.log(twoNumberSum(array,target));

// Should print empty array
// console.log(twoNumberSum(array,1));

// returns indices 
// function twoNumberSum(array, targetSum){
//     for(let i = 0; i < array.length; i++){
//         const firstNum = array[i];
//         for(let j = i+1; j < array.length; j++){
//             const secondNum = array[j];
//             if(firstNum + secondNum == targetSum) return [i,j];
//         }
//     }
//     return [];
// }


