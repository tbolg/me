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
  useResponsiveValue,
} from 'braid-design-system';
import React from 'react';

export const Header = () => {
  const responsiveValue = useResponsiveValue();
  const isTabletOrAbove = responsiveValue({
    mobile: false,
    tablet: true,
  });
  return (
    <Box>
      <Columns space="small" alignY="bottom" collapseBelow="tablet">
        <Column>
          <Stack space="medium" align={isTabletOrAbove ? 'left' : 'center'}>
            <Heading level="1">Tomas Bolger</Heading>
            <Heading weight="weak" level="2">
              Software Engineer
            </Heading>
          </Stack>
        </Column>
        <Column width="content">
          <Stack space="small" align={isTabletOrAbove ? 'right' : 'center'}>
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
};
