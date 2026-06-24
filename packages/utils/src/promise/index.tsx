import { Box } from '@mui/material';
import React from 'react';

export function myPromiseAll<T extends unknown>(
  promises: Promise<T>[],
): Promise<any> {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) resolve([]);
    const results: any[] = [];
    let count = 0;
    promises.forEach((p, index, arr) => {
      p.then((r) => {
        results[index] = r;
        count++;
        if (count === arr.length) resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  });
}

export default () => {
  const p1 = Promise.resolve('p1');
  const p2 = Promise.resolve('p2');
  const p3 = Promise.resolve('p3');
  const err1 = Promise.reject('err1');
  const err2 = Promise.reject('err2');
  const x1 = [p1, p2, p3];
  const x2 = [p1, err1, p3];
  const x3 = [err2, p1, p2];
  // Promise.all(x2).then((r) => console.log('原生promiseall', r));
  myPromiseAll([]).then((r) => console.log('xx', r));
  myPromiseAll(x1).then((r) => console.log('x1', r));
  myPromiseAll(x2).then((r) => console.log('x2', r));
  myPromiseAll(x3).then((r) => console.log('x3', r));
  return <Box>11</Box>;
};
