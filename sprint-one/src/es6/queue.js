// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
class Queue {
  constructor() {
    this.back = 0;
    this.front = 0;
    this.storage = {};
  }

  enqueue(value) {}

  dequeue() {}

  size() {
    return this.back + 1 - this.front;
  }
}
