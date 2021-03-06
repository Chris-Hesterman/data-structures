var Queue = function() {
  var someInstance = {};
  var front = 0;
  var back = 0;
  var storage = {};

  someInstance.enqueue = function(value) {
    if (!front) {
      front++;
    }
    back++;
    storage[back] = value;
  };

  someInstance.dequeue = function() {
    let result = storage[front];

    delete storage[front];
    front++;
    return result;
  };

  someInstance.size = function() {
    if (back + 1 - front <= 0 || !back) {
      return 0;
    }
    return back + 1 - front;
  };

  return someInstance;
};
