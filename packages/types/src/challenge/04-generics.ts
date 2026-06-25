/**
 * 第 4 章 — 泛型基础
 */

/**
 * Challenge 4.1
 * 实现泛型函数 `first`，返回数组第一个元素；空数组时返回 `undefined`。
 */
export function challenge_4_1<T>(arr: T[]): T | undefined {
  // TODO
  return arr[0];
}

/**
 * Challenge 4.2
 * 实现泛型接口 `ApiResponse<T>`：data 为 T，code 为 number，message 为 string。
 */
// TODO
export type ApiResponse<T> = {
  data: T;
  code: number;
  message: string;
};

/**
 * Challenge 4.3
 * 实现 `pair`，将两个不同类型的值组合为 `[A, B]` 元组。
 */
export function challenge_4_3<A, B>(a: A, b: B): [A, B] {
  // TODO
  return [a, b];
}
