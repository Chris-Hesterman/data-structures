var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(key, val) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var tuple = [key, val];
  var bucket = this._storage.get(index);

  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = val;
      }
    }
    bucket.push(tuple);
  } else {
    bucket = [tuple];
  }
  this._storage.set(index, bucket);
  this._count++;
  tooBig();
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
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === key) {
      bucket.splice(j, 1);
    }
  }
  this._storage.set(index, bucket);
  if (this._count > 0) {
    this._count--;
  }
  tooSmall();
};
// tooBig
// i - number of entries
// O - boolean, if table need resizing or not
// C - O(1)
// E - none

// compare number of items with limit

// if number of items is too big (75% of limit)
// rehash(inc);
// Otherwise output false

//tooSmall
// if number of items too small and limit is larger than 8
// rehash(dec)
// Otherwise output false
/*
 * Complexity: What is the time complexity of the above functions?
 * In the scope of the Hash Table, insert is O(1), but technically this method is O(n)
 * Retrieve, same as insert, O(1) in scope of , technically O(n) on its own.
 * Likewise for remove.
 */
