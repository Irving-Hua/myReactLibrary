/**
 * 第 17 章 — ReturnType、Parameters、Exclude 等
 */

export function createUser(name: string, age: number) {
  return { name, age, createdAt: new Date() };
}

/**
 * Challenge 17.1 — 使用 ReturnType 得到 createUser 的返回类型 UserEntity。
 */
// TODO
export type UserEntity = any;

/**
 * Challenge 17.2 — 使用 Parameters 得到 createUser 的参数元组 CreateUserArgs。
 */
// TODO
export type CreateUserArgs = any;

/**
 * Challenge 17.3 — 使用 Exclude 从 'a' | 'b' | 'c' 中去掉 'b'，得到 Remaining。
 */
export type Letter = 'a' | 'b' | 'c';

// TODO
export type Remaining = any;
