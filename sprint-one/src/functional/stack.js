var Stack = function() {
  var someInstance = {};
  var top = 0;
  var storage = {};

  someInstance.push = function(value) {
    storage[top + 1] = value;
    top++;
  };

  someInstance.pop = function() {
    let result = storage[top];
    delete storage[top];
    top--;
    return result;
  };

  someInstance.size = function() {
    if (top <= 0) {
      return 0;
    }
    return top;
  };

  return someInstance;
};
