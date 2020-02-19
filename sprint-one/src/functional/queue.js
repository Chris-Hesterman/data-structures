var Queue = function() {
  var someInstance = {};
  var front = 0;
  var back = 0;
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.enqueue = function(value) {
    back++;
    size++;
    storage[back] = value;
    if (size === 1) {
      front = back;
    }
  };

  someInstance.dequeue = function() {
    let result;

    if (!size) {
      return null;
    }
    result = storage[front];
    delete storage[front];
    front++;
    size--;
    return result;
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};
