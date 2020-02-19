// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Queue = function() {
  let newInstance = {
    size: 0,
    front: 0,
    back: 0
  };
  newInstance.enqueue = queueMethods.enqueue;
  newInstance.dequeue = queueMethods.dequeue;
  newInstance.size = queueMethods.size;

  return newInstance;
};

var queueMethods = {
  enqueue: function(val) {},
  dequeue: function() {},
  size: function() {}
};
