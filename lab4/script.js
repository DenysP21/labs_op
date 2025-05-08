class BiDirectionalPriorityQueue {
  constructor() {
    this.queue = [];
    this.timestamp = 0;
  }

  enqueue(item, priority) {
    this.queue.push({
      item,
      priority,
      timestamp: this.timestamp++,
    });
  }

  peek(type) {
    const elem = this._getElement(type);
    return elem ? elem.item : null;
  }

  dequeue(type) {
    const index = this._getIndex(type);
    if (index === -1) return null;
    return this.queue.splice(index, 1)[0].item;
  }

  _getElement(type) {
    if (this.queue.length === 0) return null;

    switch (type) {
      case "highest":
        return this.queue.reduce((a, b) => (b.priority > a.priority ? b : a));
      case "lowest":
        return this.queue.reduce((a, b) => (b.priority < a.priority ? b : a));
      case "oldest":
        return this.queue.reduce((a, b) => (b.timestamp < a.timestamp ? b : a));
      case "newest":
        return this.queue.reduce((a, b) => (b.timestamp > a.timestamp ? b : a));
      default:
        throw new Error("Unknown type for peek");
    }
  }

  _getIndex(type) {
    if (this.queue.length === 0) return -1;

    let compare;
    switch (type) {
      case "highest":
        compare = (a, b) => b.priority - a.priority;
        break;
      case "lowest":
        compare = (a, b) => a.priority - b.priority;
        break;
      case "oldest":
        compare = (a, b) => a.timestamp - b.timestamp;
        break;
      case "newest":
        compare = (a, b) => b.timestamp - a.timestamp;
        break;
      default:
        throw new Error("Unknown type for dequeue");
    }

    let bestIndex = 0;
    for (let i = 1; i < this.queue.length; i++) {
      if (compare(this.queue[i], this.queue[bestIndex]) < 0) {
        bestIndex = i;
      }
    }
    return bestIndex;
  }
}
const queue = new BiDirectionalPriorityQueue();

queue.enqueue("A", 5);
queue.enqueue("B", 10);
queue.enqueue("C", 1);

console.log(queue.peek("highest")); // B
console.log(queue.peek("lowest")); // C
console.log(queue.peek("oldest")); // A
console.log(queue.peek("newest")); // C

console.log(queue.dequeue("highest")); // B
console.log(queue.dequeue("oldest")); // A
