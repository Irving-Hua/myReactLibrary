/**
 * 第 10 章 — 类型守卫与断言
 */

/**
 * Challenge 10.1
 * 实现 `isString(value: unknown): value is string`。
 */
export function challenge_10_1(value: unknown): boolean {
  // TODO: 修正返回类型并实现
  return typeof value === 'string';
}

/**
 * Challenge 10.2
 * 实现 `assertNumber(value: unknown): asserts value is number`，非 number 时 throw。
 */
export function challenge_10_2(value: unknown): void {
  // TODO: 添加断言签名并实现
}
