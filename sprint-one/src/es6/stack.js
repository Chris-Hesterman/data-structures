// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
class Stack {
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  push(value) {
    if (!this.front) {
      this.front++;
    }
    this.top++;
    this.storage[this.top] = value;
  }

  pop() {
    let result = this.storage[this.top];

    delete this.storage[this.top];
    this.top--;
    return result;
  }

  size() {
    if (this.top < 0) {
      return 0;
    }
    return this.top;
  }
}
