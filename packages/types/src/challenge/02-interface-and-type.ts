/**
 * 第 2 章 — interface 与 type
 */

/**
 * Challenge 2.1
 * 使用 `interface` 描述一个 User：id(number)、name(string)、email(可选 string)。
 */
// TODO: 定义 User 接口
export interface User {
  id: number;
  name: string;
  email?: string;
}

/**
 * Challenge 2.2
 * 使用 `type` 定义 Status 联合类型：'idle' | 'loading' | 'success' | 'error'。
 */
// TODO: 定义 Status 类型
export type Status = 'idle' | 'loading' | 'success' | 'error';

/**
 * Challenge 2.3
 * 定义 Product 类型，并派生 `ProductPreview`（仅含 id 与 name）。
 */
export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

// TODO: 使用工具类型或手动定义 ProductPreview
export type ProductPreview = Pick<Product, 'name' | 'id'>;
