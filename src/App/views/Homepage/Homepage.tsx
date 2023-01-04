import { Box, ContentBlock, Stack } from 'braid-design-system';
import React from 'react';

import { AboutMe } from './components/AboutMe';
import { Header } from './components/Header';
import { WorkExperience } from './components/WorkExperience';
import * as data from './data';

export const HomePage = () => (
  <Box paddingY={'xxlarge'}>
    <ContentBlock>
      <Stack space="xlarge">
        <Header />
        <AboutMe />
        <WorkExperience experiences={data.workExperience} />
      </Stack>
    </ContentBlock>
  </Box>
);
