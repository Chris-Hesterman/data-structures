var Stack = function() {
  let newInstance = {};
  let size = 0;
  let tempStorage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  newInstance.push = stackMethods.push;
  newInstance.pop = stackMethods.pop;
  newInstance.size = stackMethods.size;

  return newInstance;
};

var stackMethods = {
  push: function() {},
  pop: function() {},
  size: function() {}
};
