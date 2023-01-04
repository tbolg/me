import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import type { Render } from 'sku';

import App from './App/App';

interface RenderContext {
  appHtml: string;
}

const skuRender: Render<RenderContext> = {
  renderApp: ({ SkuProvider, environment, route }) => {
    const appHtml = ReactDOM.renderToString(
      <StaticRouter location={route}>
        <SkuProvider>
          <App />
        </SkuProvider>
      </StaticRouter>,
    );

    return {
      appHtml,
    };
  },

  provideClientContext: ({ environment }) => ({
    environment,
  }),

  renderDocument: ({ app, bodyTags, headTags }) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${headTags}
      </head>
      <body>
        <div id="app">${app.appHtml}</div>
        ${bodyTags}
      </body>
    </html>
  `,
};

export default skuRender;