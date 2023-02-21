import {
  Heading,
  List,
  Stack,
  Strong,
  Text,
  TextLinkButton,
} from 'braid-design-system';
import React from 'react';

import { Experience } from '../types/workExperience';

interface Props {
  experiences: Experience[];
}

export const WorkExperience = ({ experiences }: Props) => {
  const removeHttps = (url: string) => url.replace(/(^\w+:|^)\/\//, '');
  return (
    <Stack space="medium" dividers>
      <Heading align="center" level="1">
        Experience
      </Heading>

      <Stack space="gutter" dividers>
        {experiences.map((experience, index) => (
          <Stack key={index} space="medium">
            <Heading align="left" level="3">
              {experience.companyName} |{' '}
              <TextLinkButton
                onClick={() => window.open(experience.companyUrl, '_blank')}
              >
                {removeHttps(experience.companyUrl)}
              </TextLinkButton>
            </Heading>
            {experience.roles.map((role) => (
              <Stack key={role.title} space="medium">
                <Text align="left">
                  <Strong>
                    {role.title} |{' '}
                    {`${role.startDate} - ${role.endDate ?? 'present'}`}
                  </Strong>
                </Text>
                <Stack space="medium">
                  <Text align="left">
                    <i>Key Responsibilities and Achievements:</i>
                  </Text>
                  <Stack space="medium">
                    {role.secondments.map((secondment) => (
                      <Stack key={secondment.teamName} space="medium">
                        <Text align="left" weight="strong">
                          {secondment.teamName}{' '}
                          {secondment.teamUrl && (
                            <>
                              {'- '}
                              <TextLinkButton
                                onClick={() =>
                                  window.open(secondment.teamUrl, '_blank')
                                }
                              >
                                {removeHttps(secondment.teamUrl)}
                              </TextLinkButton>
                            </>
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
};
