// O(n) time, O(n) space
// returns values
function twoNumberSum(array, targetSum) {
    const map = {};
    for (const num of array){
        const potentialMatch = targetSum - num;
        if (potentialMatch in map){
            return [potentialMatch, num];
        }else{
            map[num] = true;
        }
    }
    return [];
}


//returns indices
// {value: index}
// function twoNumberSum(array,targetSum){
//     const map = {};
//     for (let i = 0; i<array.length; i++){
//         const potentialMatch = targetSum - array[i];
//         if(potentialMatch in map){
//             return [map[potentialMatch], i]
//         }else{
//             map[array[i]] = i;
//         }
//     }
// }






