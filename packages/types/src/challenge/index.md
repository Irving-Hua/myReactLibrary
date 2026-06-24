# TypeScript 基础挑战

夯实 TypeScript 基础语法的练习题集，覆盖类型注解、泛型、工具类型、条件类型、映射类型等常见场景。

## 使用方式

1. 按章节打开对应文件（见下表）
2. 找到带 `// TODO` 或占位类型 `any` 的题目
3. 替换为正确实现，用 IDE 或 `tsc --noEmit` 验证
4. 本练习**不包含参考答案**，建议先独立完成再查阅文档

## 章节与文件

| 章节 | 主题 | 文件 |
| --- | --- | --- |
| 1 | 基础类型注解 | [`01-basic-types.ts`](./01-basic-types.ts) |
| 2 | interface 与 type | [`02-interface-and-type.ts`](./02-interface-and-type.ts) |
| 3 | 联合类型与交叉类型 | [`03-union-and-intersection.ts`](./03-union-and-intersection.ts) |
| 4 | 泛型基础 | [`04-generics.ts`](./04-generics.ts) |
| 5 | 常用工具类型 | [`05-utility-types.ts`](./05-utility-types.ts) |
| 6 | keyof 与索引访问 | [`06-keyof-and-indexed-access.ts`](./06-keyof-and-indexed-access.ts) |
| 7 | 映射类型 | [`07-mapped-types.ts`](./07-mapped-types.ts) |
| 8 | 条件类型基础 | [`08-conditional-types.ts`](./08-conditional-types.ts) |
| 9 | 函数重载 | [`09-function-overloads.ts`](./09-function-overloads.ts) |
| 10 | 类型守卫与断言 | [`10-type-guards.ts`](./10-type-guards.ts) |
| 11 | 字面量类型与 `as const` | [`11-literal-and-as-const.ts`](./11-literal-and-as-const.ts) |
| 12 | 元组与 readonly | [`12-tuples-and-readonly.ts`](./12-tuples-and-readonly.ts) |
| 13 | 可辨识联合 | [`13-discriminated-unions.ts`](./13-discriminated-unions.ts) |
| 14 | 泛型约束 | [`14-generic-constraints.ts`](./14-generic-constraints.ts) |
| 15 | `infer` 入门 | [`15-infer.ts`](./15-infer.ts) |
| 16 | 模板字面量类型 | [`16-template-literal-types.ts`](./16-template-literal-types.ts) |
| 17 | ReturnType、Parameters、Exclude 等 | [`17-builtin-type-utilities.ts`](./17-builtin-type-utilities.ts) |
| 18 | 综合练习 | [`18-comprehensive.ts`](./18-comprehensive.ts) |

也可通过 [`index.ts`](./index.ts) 统一 re-export 全部章节。

```ts
// 按章节练习
import {} from './challenge/04-generics';

// 或一次性引入全部
import {} from './challenge';
```
