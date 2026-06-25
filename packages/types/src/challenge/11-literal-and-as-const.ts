/**
 * 第 11 章 — 字面量类型与 as const
 */

/**
 * Challenge 11.1
 * 使用 `as const` 定义 routes，使每个 path 为字面量类型而非 string。
 */
export const challenge_11_1 = () => {
  const routes = {
    home: '/',
    about: '/about',
    settings: '/settings',
  } as const; // TODO: 添加 as const
  return routes;
};

/**
 * Challenge 11.2
 * 基于 challenge_11_1 的 routes，定义 `RoutePath` 为所有 path 值的联合类型。
 */
// TODO
type Route = ReturnType<typeof challenge_11_1>;
export type RoutePath = Route[keyof Route];
