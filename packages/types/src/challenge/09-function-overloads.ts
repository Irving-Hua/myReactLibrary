/**
 * 第 9 章 — 函数重载
 */

/**
 * Challenge 9.1
 * 为 `parseInput` 声明重载：
 * - parseInput('json', s: string) => object
 * - parseInput('number', s: string) => number
 * 并实现函数体（可简化实现）。
 */
// TODO: 添加 overload signatures
export function challenge_9_1(kind: string, input: string): unknown {
  if (kind === 'json') return JSON.parse(input);
  return Number(input);
}
