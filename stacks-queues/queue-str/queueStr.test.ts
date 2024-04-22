// noinspection JSVoidFunctionReturnValueUsed

import { expect, it } from "vitest";
import { QueueStr } from "./queueStr";


it("pushes/pop with empty", function () {
  const queue = new QueueStr();
  expect(queue.enqueue("a")).toBe(undefined);
  expect(queue.peek()).toBe("a");
  expect(queue.dequeue()).toBe("a");
  expect(queue.isEmpty()).toBe(true);
});

it("pushes/pop with 2 items", function () {
  const queue = new QueueStr(["a"]);
  expect(queue.enqueue("b")).toBe(undefined);
  expect(queue.peek()).toBe("a");
  expect(queue.dequeue()).toBe("a");
  expect(queue.isEmpty()).toBe(false);
  expect(queue.peek()).toBe("b");
  expect(queue.dequeue()).toBe("b");
  expect(queue.isEmpty()).toBe(true);
});

it("errors on empty", function () {
  const queue = new QueueStr();
  expect(queue.isEmpty()).toBe(true);
  expect(() => queue.dequeue()).toThrow(Error);
  expect(() => queue.peek()).toThrow(Error);
});
