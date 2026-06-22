export type { Simplify } from 'type-fest';

export type Nullable<T> = T | null | undefined;

export type ValueOf<T> = T[keyof T];
