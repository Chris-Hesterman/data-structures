var Stack = function() {
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[count + 1] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count === 0) {
      return 0;
    }
    storage[count] = someInstance[count];
    delete someInstance[count];
    count--;
    return storage[count + 1];
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
