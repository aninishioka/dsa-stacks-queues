import { StackStr } from "../common/stack";

/** Return reverse of string. */

function stringReversal(str: string): string {
  const stack = new StackStr(str.split(''));

  let reversed = '';

  while (!stack.isEmpty()) reversed += stack.pop();

  return reversed;
}

export { stringReversal };