//O(nlogn) time | O(n) space

function sortedSquaredArray(array) {
	var arr2 = array.map(x => x*x);
	var arr3 = arr2.sort((a,b) => a-b)
    return [arr3];
}
// var arr1 = [-6,-9,4,2,3,1];
// console.log(sortedSquaredArray(arr1))