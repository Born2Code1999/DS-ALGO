//O(n) time | O(1) space
// take two array of integers, determine if one is subsequence of another

function isValidSubsequence(array, sequence){
    let arrayIdx = 0;
    let sequenceIdx = 0;
    while((arrayIdx < array.length) && (sequenceIdx < sequence.length)){
        if(array[arrayIdx] == sequence[sequenceIdx]) sequenceIdx++;
        arrayIdx++;
    }
    return sequenceIdx == sequence.length;
}

const arr = [1,3,5,7,9];
const seq = [1,5,9];
const seq2 = [3,1,5];
//should return true
console.log(isValidSubsequence(arr,seq));
// //should return false
console.log(isValidSubsequence(arr,seq2));