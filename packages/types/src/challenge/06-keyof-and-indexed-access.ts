/**
 * 第 6 章 — keyof 与索引访问类型
 */

export type Book = {
  title: string;
  author: string;
  pages: number;
};

/**
 * Challenge 6.1 — 定义 `BookKey` 为 Book 所有键的联合类型。
 */
// TODO
export type BookKey = keyof Book;

/**
 * Challenge 6.2 — 定义 `BookField<K>`，当 K 为 Book 的键时，值为 Book[K]。
 */
// TODO
export type BookField<K extends keyof Book> = Book[K];
/**
 * Challenge 6.3 — 实现 `getProp(obj, key)`，返回对应属性值且类型正确。
 */
export function challenge_6_3<K extends keyof Book>(
  obj: Book,
  key: K,
): Book[K] {
  // TODO
  return obj[key];
}
