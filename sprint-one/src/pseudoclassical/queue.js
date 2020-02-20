// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Queue = function() {
  this.back = 0;
  this.front = 0;
  this.storage = {};
};

let queueMethods = {
  enqueue: function(value) {},
  dequeue: function() {},
  size: function() {
    return this.back + 1 - this.front;
  }
};

Queue.prototype.enqueue = queueMethods.enqueue;
Queue.prototype.dequeue = queueMethods.dequeue;
Queue.prototype.size = queueMethods.size;
