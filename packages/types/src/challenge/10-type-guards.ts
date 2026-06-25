/**
 * 第 10 章 — 类型守卫与断言
 */

/**
 * Challenge 10.1
 * 实现 `isString(value: unknown): value is string`。
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}
console.log(isString(123));
/**
 * Challenge 10.2
 * 实现 `assertNumber(value: unknown): asserts value is number`，非 number 时 throw。
 */
export function assertNumber(value: unknown): asserts value is number {
  if (typeof value !== 'number') throw 1;
}
