var Queue = function() {
  var someInstance = {};
  var front = 0;
  var back = 0;
  var size = 0;
  var tempIndex;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    back++;
    size++;
    someInstance[back] = value;
    if (size === 1) {
      front = back;
    }
  };

  someInstance.dequeue = function() {
    tempIndex = front;
    storage[tempIndex] = someInstance[front];
    delete someInstance[front];
    front++;
    size--;
    return storage[tempIndex];
  };

  someInstance.size = function() {
    if (size < 0) {
      return 0;
    }
    return size;
  };

  return someInstance;
};
