/**
 * 第 7 章 — 映射类型
 */

/**
 * Challenge 7.1
 * 实现 `Mutable<T>`，去掉 T 所有属性的 readonly。
 */
export type ReadonlyPoint = {
  readonly x: number;
  readonly y: number;
};

// TODO
export type Mutable<T> = { -readonly [P in keyof T]: T[P] };

/**
 * Challenge 7.2
 * 实现 `NullableFields<T>`：每个属性值变为 T[K] | null。
 */
export type Point = { x: number; y: number };

// TODO
export type NullableFields<T> = { [K in keyof T]: T[K] | null };
