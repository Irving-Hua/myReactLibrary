/**
 * 第 3 章 — 联合类型与交叉类型
 */

/**
 * Challenge 3.1
 * 定义 `StringOrNumber`，表示 string 或 number。
 */
// TODO
export type StringOrNumber = string | number;

/**
 * Challenge 3.2
 * 定义 `Named` 与 `Aged`，再用交叉类型得到 `Person`（同时包含 name 与 age）。
 */
export type Named = { name: string };
export type Aged = { age: number };

// TODO: 定义 Person
export type Person = Named & Aged;

/**
 * Challenge 3.3
 * 实现 `getLength`：对 string 返回 length，对 number 返回其十进制位数（可用 String(n).length）。
 */
export function challenge_3_3(value: StringOrNumber): number {
  // TODO: 用类型收窄实现
  if (typeof value === 'string') return value.length;
  else if (typeof value === 'number') return String(value).length;
  return 0;
}
