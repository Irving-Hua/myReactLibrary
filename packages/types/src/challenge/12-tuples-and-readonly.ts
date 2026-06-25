/**
 * 第 12 章 — 元组与 readonly
 */

/**
 * Challenge 12.1
 * 定义 RGB 元组 `[number, number, number]` 类型 `RGB`。
 */
// TODO
export type RGB = [number, number, number];

/**
 * Challenge 12.2
 * 实现 `zip`，将两个同长度数组组合为 `[T, U][]`。
 */
export function zip<T, U>(a: T[], b: U[]): [T, U][] {
  // TODO: 修正返回类型并实现（假设 a.length === b.length）
  return a.map((d, index) => [d, b[index]]);
}
