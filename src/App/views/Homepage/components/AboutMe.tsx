import {
  Badge,
  Heading,
  Inline,
  List,
  Stack,
  Tag,
  Text,
  TextLink,
} from 'braid-design-system';
import React from 'react';

export const AboutMe = () => (
  <Stack space="medium" dividers>
    <Heading align="center" level="1">
      About Me
    </Heading>

    <Stack space="large">
      <Text align="left">
        My name is Tomas Bolger and I am a full-stack Software Engineer living
        in Melbourne, Australia. I&apos;m currently working for
        <TextLink href="https://www.seek.com.au"> SEEK </TextLink> within the
        team responsible for building{' '}
        <TextLink href="https://developer.seek.com">
          their external API
        </TextLink>
        .
      </Text>
      <Stack space="small">
        <Text>My current primary fields of expertise are:</Text>
        <List>
          <Inline space="xsmall" alignY="center">
            <Badge>Full-Stack Web Development</Badge>
            <Text size="small">
              (React, Typescript, AWS, Serverless, Microservices, Event Driven
              Systems)
            </Text>
          </Inline>
          <Inline space="xsmall" alignY="center">
            <Badge>Data Engineering</Badge>
            <Text size="small">(Python, AWS, Redshift, AWS CDK)</Text>
          </Inline>
        </List>
      </Stack>
    </Stack>
  </Stack>
);
