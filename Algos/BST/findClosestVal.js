//Recursive
// O(log(n)) time | O(log(n)) space

function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value)
  }
  
function findClosestValueInBstHelper(tree, target, closest){
      if (tree === null) return closest;
      if(Math.abs(target-closest) > Math.abs(target-tree.value)){
          closest = tree.value;
      }
      if(target < tree.value){
          return findClosestValueInBstHelper(tree.left, target, closest);
      }else if(target > tree.value){
          return findClosestValueInBstHelper(tree.right, target, closest);
      }else{
          return closest;
      }
}

class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

//iteratively
function findClosestValueInBstHelper(tree, target, closest){
    var currentNode = tree;
          while(currentNode != null){
              if(Math.abs(target-closest) > Math.abs(target-currentNode.value)){
                      closest = currentNode.value;
              }
              if(target < currentNode.value){
                      currentNode = currentNode.left;
              }else if(target > currentNode.value){
                      currentNode = currentNode.right;
              }else{
                      break;
              }
          }return closest;
}