/**
 * 第 5 章 — 常用工具类型
 */

export type TodoItem = {
  id: number;
  title: string;
  done: boolean;
  createdAt: Date;
};

/**
 * Challenge 5.1 — 使用 Partial，使所有字段可选，得到 `TodoPatch`。
 */
// TODO
export type TodoPatch = any;

/**
 * Challenge 5.2 — 使用 Pick，得到仅含 id 与 title 的 `TodoSummary`。
 */
// TODO
export type TodoSummary = any;

/**
 * Challenge 5.3 — 使用 Omit，去掉 createdAt，得到 `TodoWithoutDate`。
 */
// TODO
export type TodoWithoutDate = any;

/**
 * Challenge 5.4 — 使用 Record，定义 `RolePermissions`：键为 'admin' | 'guest'，值为 string[]。
 */
// TODO
export type RolePermissions = any;

/**
 * Challenge 5.5 — 使用 Required，将 `{ a?: string; b?: number }` 全部变为必填。
 */
export type OptionalConfig = { a?: string; b?: number };

// TODO
export type RequiredConfig = any;
