js 手写 promise.all

- 手写 Promise.all 实现
- 特点：
- 1.  接收一个可迭代对象（Array, Set, Map 等）
- 2.  返回一个新的 Promise
- 3.  所有 promise 都成功时，返回结果数组（保持顺序）
- 4.  任何一个失败，立即 reject
- 5.  支持非 promise 值（直接 resolve）

<code src="./index.tsx"></code>
