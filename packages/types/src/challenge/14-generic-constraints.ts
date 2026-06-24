/**
 * 第 14 章 — 泛型约束
 */

/**
 * Challenge 14.1
 * 实现 `merge`，合并两个对象；要求参数都带有 `id: string`。
 */
export function challenge_14_1(_a: unknown, _b: unknown): unknown {
  // TODO: 添加泛型约束 { id: string } 并实现
  return undefined;
}

/**
 * Challenge 14.2
 * 实现 `getPropertyLength`，T 需满足存在 `length: number` 的属性（如 string、array）。
 */
export function challenge_14_2<T>(obj: T): number {
  // TODO: 添加 extends 约束并实现
  return 0;
}
