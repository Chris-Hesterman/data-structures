var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  let sapling = Tree(value);

  this.children.push(sapling);
};

treeMethods.contains = function (target) {
  if (this.value === target) {
    return true;
  }
  if (this.children.length) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.contains.call(this.children[i], target)){
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 Tree will be O(N)
 .addChild will be O(1)
 .contains will O(N)
 */
