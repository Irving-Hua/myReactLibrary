import type { Nullable } from '@xui/types';

export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

export function toArray<T>(value: Nullable<T | T[]>): T[] {
  if (isNil(value)) return [];
  return Array.isArray(value) ? value : [value];
}
