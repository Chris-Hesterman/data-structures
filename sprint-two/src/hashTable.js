

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, val) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var tuple = [key, val];
  var bucket = this._storage.get(index);

  if (bucket){
    for (var i = 0; i < bucket.length; i++){
      if(bucket[i][0] === key){
        bucket[i][1] = val;
      }
    }
    bucket.push(tuple);
  } else {
    bucket = [tuple];
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);

  if (bucket) {
    for (let tuple of bucket) {
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
  }
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  for (var j = 0; j < bucket.length; j++){
    if (bucket[j][0] === key){
      bucket.splice(j, 1);
    }
  }
  this._storage.set(index, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


