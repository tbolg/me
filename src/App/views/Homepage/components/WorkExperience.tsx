import {
  Heading,
  Link,
  List,
  Stack,
  Strong,
  Text,
  TextLink,
} from 'braid-design-system';
import React from 'react';

import { Experience } from '../types';

interface Props {
  experiences: Experience[];
}

export const WorkExperience = ({ experiences }: Props) => (
  <Stack space="medium" dividers>
    <Heading align="center" level="1">
      Experience
    </Heading>

    <Stack space="gutter" dividers>
      {experiences.map((experience, index) => (
        <Stack key={index} space="medium">
          <Heading align="left" level="3">
            {experience.companyName} |{' '}
            <TextLink href={experience.companyUrl}>
              {experience.companyUrl}
            </TextLink>
          </Heading>
          {experience.roles.map((role) => (
            <Stack key={role.title} space="medium">
              <Text align="left">
                <Strong>
                  {role.title} |{' '}
                  {`${role.startDate} - ${role.endDate ?? 'present'}`}
                </Strong>
              </Text>
              <Stack space="small">
                <Text align="left">
                  <i>Key Responsibilities and Achievements:</i>
                </Text>
                <Stack space="small">
                  {role.secondments.map((secondment) => (
                    <Stack key={secondment.teamName} space="small">
                      <Text align="left" weight="strong">
                        {secondment.teamName}{' '}
                        {secondment.teamUrl && (
                          <TextLink href={secondment.teamUrl}>
                            ({secondment.teamUrl})
                          </TextLink>
                        )}
                      </Text>
                      <List>
                        {secondment.achievements.map((achievement) => (
                          <Text key={achievement}>{achievement}</Text>
                        ))}
                      </List>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  </Stack>
);
