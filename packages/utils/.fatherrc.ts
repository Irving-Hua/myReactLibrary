import path from 'path';
import { defineConfig } from 'father';

export default defineConfig({
  alias: {
    '@xui/types': path.join(__dirname, '../types/src/index.ts'),
  },
  esm: { output: 'dist' },
});
