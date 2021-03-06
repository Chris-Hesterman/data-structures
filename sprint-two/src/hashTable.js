var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(key, val) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var tuple = [key, val];
  var bucket = this._storage.get(index);

  if (bucket) {
    for (let tuple of bucket) {
      if (tuple[0] === key) {
        tuple[1] = val;
        this._size--;
      }
    }
    bucket.push(tuple);
  } else {
    bucket = [tuple];
  }
  this._storage.set(index, bucket, this._limit);
  this._size++;
  this.tooBig();
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

  if (bucket) {
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === key) {
        bucket.splice(j, 1);
      }
    }
  }

  this._storage.set(index, bucket);
  if (this._size > 0) {
    this._size--;
  }
  this.tooSmall();
};

HashTable.prototype.tooBig = function() {
  if (this._size / this._limit > 0.75) {
    this.reHash('Increase');
  }
};

HashTable.prototype.tooSmall = function() {
  if (this._size / this._limit < 0.25 && this._limit > 8) {
    this.reHash('Decrease');
  }
};

HashTable.prototype.reHash = function(flag) {
  let tempStorageArr = [];

  this._storage.each(function() {
    let bucket = arguments[0];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        tempStorageArr.push(bucket[i]);
      }
    }
  });

  if (flag === 'Increase') {
    this._limit *= 2;
  } else {
    this._limit /= 2;
  }

  this._size = 0;
  for (var j = 0; j < tempStorageArr.length; j++) {
    this.insert(tempStorageArr[j][0], tempStorageArr[j][1]);
  }
};

// check input arg
//  if 'increase'
//    increase size of hashTable
//  otherwise
//    decrease size of hashTable

// loop through temp storage structure
//  re-populate hashTable
/*
 * Complexity: What is the time complexity of the above functions?
 * In the scope of the Hash Table, insert is O(1), but technically this method is O(n)
 * Retrieve, same as insert, O(1) in scope of , technically O(n) on its own.
 * Likewise for remove.
 */
