// O(nlogn) time | O(1) space

function nonConstructibleChange(coins){
    coins.sort((a, b) => a - b);
    var currentChangeCreated = 0;
    for(const coin of coins){
        if(coin > currentChangeCreated + 1) return currentChangeCreated + 1;
        currentChangeCreated += coin;
    }
    return currentChangeCreated + 1;
}

// const arr = [1,2,4,5,13, ];
// console.log(nonConstructibleChange(arr))