// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Queue = function() {
  let newInstance = Object.create(Queue.prototype);
  newInstance.front = 0;
  newInstance.back = 0;
  newInstance.storage = {};
};

var queueMethods = {
  enqueue(value) {},
  dequeue() {},
  size() {
    return back + 1 - front;
  }
};
Queue.prototype.enqueue = queueMethods.enqueue;
Queue.prototype.dequeue = queueMethods.dequeue;
Queue.prototype.size = queueMethods.size;
