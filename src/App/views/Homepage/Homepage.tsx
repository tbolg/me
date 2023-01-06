import { Box, ContentBlock, Stack } from 'braid-design-system';
import { useResponsiveValue } from 'braid-design-system';
import { Text } from 'braid-design-system';
import React from 'react';

import { AboutMe } from './components/AboutMe';
import { EducationHistory } from './components/EducationHistory';
import { Header } from './components/Header';
import { Projects } from './components/Project/Projects';
import { WorkExperience } from './components/WorkExperience';
import * as data from './data';

export const HomePage = () => {
  const responsiveValue = useResponsiveValue();
  return (
    <Box paddingY={'xxlarge'}>
      <ContentBlock
        width={
          responsiveValue({
            mobile: 'xsmall',
            tablet: 'small',
            desktop: 'medium',
          }) ?? 'medium'
        }
      >
        <Stack space="xxlarge">
          <Stack space="xlarge">
            <Header />
            <AboutMe />
            <WorkExperience experiences={data.workExperience} />
            <EducationHistory education={data.education} />
            <Projects projects={data.projects} />
          </Stack>
          <Text align="center">
            <i>
              Tomas Bolger - tbolger.business@gmail.com - References available
              upon request
            </i>
          </Text>
        </Stack>
      </ContentBlock>
    </Box>
  );
};
