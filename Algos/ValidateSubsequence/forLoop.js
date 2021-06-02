//O(n) time | O(1) space

function isValidSubsequence(array, sequence){
    let sequenceIdx = 0;
    for(const value of array){
        if(sequenceIdx == sequence.length) return true;
        if(value == sequence[sequenceIdx]) sequenceIdx++;
    }
    return sequenceIdx == sequence.length;
}

