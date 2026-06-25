/**
 * 第 1 章 — 基础类型注解
 */

/**
 * Challenge 1.1
 * 为变量 `userName`、`userAge`、`isActive` 补充正确的类型注解。
 */
export const challenge_1_1 = () => {
  const userName: string = 'Alice';
  const userAge: number = 28;
  const isActive: true = true;
  return { userName, userAge, isActive };
};

/**
 * Challenge 1.2
 * 声明函数 `formatPrice`，接收 `number`，返回格式化后的 `string`（如 `"¥99.00"`）。
 */
export function challenge_1_2(price: number): string {
  // TODO: 修正参数与返回值类型，并实现函数体
  return '' + price;
}
