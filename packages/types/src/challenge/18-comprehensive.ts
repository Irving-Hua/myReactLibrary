/**
 * 第 18 章 — 综合练习
 */

/**
 * Challenge 18.1
 * 实现类型安全的 `createStore<S>`：
 * - get(): S
 * - set(partial: Partial<S>): void
 * - subscribe(listener: (state: S) => void): () => void
 */
export function challenge_18_1<S>(initial: S): unknown {
  // TODO: 定义并返回 Store<S> 接口的实现
  let state = initial;
  const listeners = new Set<(state: S) => void>();
  return {
    get: () => state,
    set: (partial: Partial<S>) => {
      state = { ...state, ...partial };
      listeners.forEach((fn) => fn(state));
    },
    subscribe: (listener: (state: S) => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

/**
 * Challenge 18.2
 * 实现 `DeepPartial<T>`：递归地将对象所有层级变为可选（仅考虑普通对象，不含数组）。
 */
// TODO
export type DeepPartial<T> = any;
