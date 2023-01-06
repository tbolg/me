import 'braid-design-system/reset';

import { BraidProvider } from 'braid-design-system';
import wireframe from 'braid-design-system/themes/wireframe';
import React from 'react';

import { HomePage } from './views/Homepage/Homepage';

export default () => (
  <BraidProvider theme={wireframe}>
    <HomePage />
  </BraidProvider>
);
