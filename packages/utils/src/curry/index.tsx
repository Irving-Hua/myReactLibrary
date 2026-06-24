import { Box } from '@mui/material';
import React from 'react';
type FunctionType = (...args: any) => any;
export function curry<T extends FunctionType>(fn: T): FunctionType {
  const len = fn.length;
  let argsA: any[] = [];
  return function curryIt(this: any, ...args: any[]) {
    if (argsA.length === len - 1) {
      return fn.apply(this, argsA.concat(args));
    } else {
      return (...newArgs: any[]) => {
        return curryIt.apply(this, newArgs);
      };
    }
  };
}

export default () => {
  function add(a: number, b: number, c: number) {
    return a + b + c;
  }
  const curryAdd = curry(add);
  console.log(add(...[1, 2, 3]));
  console.log(curryAdd(1)(2)(3));
  return <Box>11</Box>;
};
