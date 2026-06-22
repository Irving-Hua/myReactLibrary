import path from 'path';
import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  alias: {
    '@xui/base': path.join(__dirname, 'packages/base/src/index.ts'),
    '@xui/fields': path.join(__dirname, 'packages/fields/src/index.ts'),
    '@xui/input': path.join(__dirname, 'packages/input/src/index.ts'),
    '@xui/types': path.join(__dirname, 'packages/types/src/index.ts'),
    '@xui/utils': path.join(__dirname, 'packages/utils/src/index.ts'),
  },
  monorepoRedirect: {
    peerDeps: true,
    useRootProject: true,
  },
  resolve: {
    atomDirs: [
      { type: 'utils', dir: 'packages/utils/src' },
      { type: 'type', dir: 'packages/types/src' },
      { type: 'base', dir: 'packages/base/src' },
      { type: 'field', dir: 'packages/fields/src' },
      { type: 'input', dir: 'packages/input/src' },
    ],
  },
  themeConfig: {
    name: 'XUI',
  },
});
