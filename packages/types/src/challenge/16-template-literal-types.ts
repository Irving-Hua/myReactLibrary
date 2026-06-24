/**
 * 第 16 章 — 模板字面量类型
 */

/**
 * Challenge 16.1
 * 定义 EventName 为 'click' | 'focus' | 'blur'，再定义 HandlerName 为 `on${Capitalize<EventName>}`。
 */
export type EventName = 'click' | 'focus' | 'blur';

// TODO
export type HandlerName = any;

/**
 * Challenge 16.2
 * 定义 CSSValue 为 `${number}px` | `${number}%`（提示：使用模板字面量联合）。
 */
// TODO
export type CSSValue = any;
