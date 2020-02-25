var LinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
    var removedHead = this.head;

    this.head = this.head.next;

    return removedHead.value;
  };

  list.contains = function(target) {
    var currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === target) {
        console.log(currentNode);
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Linked list should be constant time O(1);
 * addToTail should be constant time O(1);
 * removeHead should be constant time O(1);
 * contains should be linear time O(n);
 * Node should be constant time O(1);
 */
