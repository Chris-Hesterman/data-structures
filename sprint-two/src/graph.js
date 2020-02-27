

// Instantiate a new graph
var Graph = function() {
  this.adjacencyList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.adjacencyList[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  if (this.adjacencyList[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  if(this.adjacencyList[node].length){
    this.adjacenyList[node].forEach(function (toNode) {
      console.log(this);
     this.removeEdge(node, toNode);
    });
  }

  delete this.adjacenyList[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  if (this.adjacencyList[fromNode] && this.adjacencyList[toNode]){
    this.adjacencyList[fromNode] = this.adjacencyList[fromNode].filter(function (edge){
      return edge !== toNode;
    });
    this.adjacencyList[toNode] = this.adjacencyList[toNode].filter(function (edge){
      return edge !== fromNode;
    });
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


