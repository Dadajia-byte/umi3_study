import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {// node_modules 目录下依赖文件
    type: 'none', // all 慢 兼容性好，none 快 兼容性一般
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  // fastRefresh: {}, // 快速刷新，以保持组件状态，同时编辑提供即时反馈
});
