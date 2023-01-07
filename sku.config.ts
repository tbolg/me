import type { SkuConfig } from 'sku';

const skuConfig: SkuConfig = {
  clientEntry: 'src/client.tsx',
  renderEntry: 'src/render.tsx',
  publicPath: './',
  orderImports: true,
  routes: ['/'],
};

export default skuConfig;
