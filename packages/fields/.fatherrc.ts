import path from 'path';
import { defineConfig } from 'father';

export default defineConfig({
  alias: {
    '@xui/base': path.join(__dirname, '../base/src/index.ts'),
    '@xui/types': path.join(__dirname, '../types/src/index.ts'),
  },
  esm: { output: 'dist' },
});
