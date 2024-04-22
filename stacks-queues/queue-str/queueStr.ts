import { LL } from "../common/ll";

/** QueueStr: can remove from start or add to end */

class QueueStr {
  _ll : LL<String> = new LL();

  constructor(initial: string[] = []) {
    this._ll = new LL(initial);
  }

  /** enqueue(val): add val to end. Returns undefined. */
  enqueue(val: string): void {
    this._ll.push(val);
  }

  /** dequeue(): remove & return item from start.
   * Throws error if empty. */
  dequeue(): string {
    return String(this._ll.shift());
  }

  /** peek(): return the value of top. */
  peek(): string {
    return String(this._ll.getAt(0));
  }

  /** isEmpty(): is the queue empty? */
  isEmpty(): boolean {
    return this._ll.length === 0;
  }
}


export { QueueStr };
