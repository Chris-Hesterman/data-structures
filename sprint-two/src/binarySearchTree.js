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
  let direction;

  if (value > this.value) {
    direction = 'right';
  } else {
    direction = 'left';
  };
  console.log(this.left);
  if (this[direction] === value) {
    return true;
  }
  if (this[direction] !== value || this[direction] !== undefined) {
    this.contains.call(this[direction], value);
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
 */
