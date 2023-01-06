import { Heading, Stack, Text } from 'braid-design-system';
import React from 'react';

import { Education } from '../types/education';

interface Props {
  education: Education;
}

export const EducationHistory = ({ education }: Props) => (
  <Stack space="medium" dividers>
    <Heading align="center" level="1">
      Education
    </Heading>
    <Stack space="medium" align="center">
      <Heading align="center" level="3">
        {education.university}
      </Heading>
      <Heading align="center" level="4">
        {education.degree}
      </Heading>
      <Text align="center" weight="strong">
        Completed {education.yearStarted} - {education.yearFinished}
      </Text>
      <Text align="center">{education.notes}</Text>
    </Stack>
  </Stack>
);
