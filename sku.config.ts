import type { SkuConfig } from 'sku';

const skuConfig: SkuConfig = {
  clientEntry: 'src/client.tsx',
  renderEntry: 'src/render.tsx',
  environments: ['development', 'production'],
  publicPath: '/static/', // <-- Required for sku build output
  orderImports: true,
  routes: ['/'],
};

export default skuConfig;
