var BinarySearchTree = function (value) {
  var binTree = Object.create(BinarySearchTree.prototype);
  binTree.value = value;
  binTree.left;  // values less than current value
  binTree.right; // values higher than current value
  Object.assign(BinarySearchTree.prototype, binTreeMethods);
  return binTree;
};

var binTreeMethods = {};

binTreeMethods.insert = function (value){
  if (value > this.value){
    if (!this.right){
      this.right = BinarySearchTree(value);
    }
    if (this.right){
      this.right.insert(value);
    }
  }
  if (value < this.value){
    if (!this.left){
      this.left = BinarySearchTree(value);
    }
    if (this.left){
      this.left.insert(value);
    }
  }
}

binTreeMethods.contains = function (value) {

  if (value === this.value) {
    return true;
  }
  if (value > this.value) {
    if (this.right) {
      if (this.right.contains(value)) {
        return true;
      };
    }
  }
  if (value < this.value) {
    if (this.left) {
      if(this.left.contains(value)) {
        return true;
      };
    }
  }
  return false;
}

binTreeMethods.depthFirstLog = function (callback){
  callback(this.value);
  if (this.left){
    this.left.depthFirstLog(callback);
  }
  if (this.right){
    this.right.depthFirstLog(callback);
  }
  return;
}

/*
 * Complexity: What is the time complexity of the above functions?
 .BinarySearchTree = O(1)
 .insert = O(log n)
 .contains = O(log n)
 .depthFirstLog = O(n)
 */
