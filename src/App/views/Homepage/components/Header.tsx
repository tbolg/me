import {
  Box,
  Text,
  Stack,
  IconSocialLinkedIn,
  IconSocialGitHub,
  Heading,
  Columns,
  Column,
  Inline,
  IconMail,
} from 'braid-design-system';
import React from 'react';

export const Header = () => (
  <Box>
    <Columns space="small" alignY="bottom">
      <Column>
        <Stack space="medium">
          <Heading level="1">Tomas Bolger</Heading>
          <Heading weight="weak" level="2">
            Software Engineer
          </Heading>
        </Stack>
      </Column>
      <Column width="content">
        <Stack space="small" align="right">
          <Inline space="small">
            <IconSocialLinkedIn size="large" />
            <IconSocialGitHub />
          </Inline>
          <Text>
            <IconMail /> tbolger.business@gmail.com
          </Text>
        </Stack>
      </Column>
    </Columns>
  </Box>
);
