var Stack = function() {
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count + 1] = value;
    count++;
  };

  someInstance.pop = function() {
    let result;
    if (count === 0) {
      return null;
    }
    result = storage[count];
    delete storage[count];
    count--;
    return result;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
