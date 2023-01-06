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
  ButtonIcon,
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
              <ButtonIcon
                size="large"
                bleed
                icon={<IconSocialGitHub />}
                id={'github-link'}
                label={'GitHub'}
                onClick={() =>
                  window.open('https://github.com/tbolg', '_blank')
                }
              />
              <ButtonIcon
                size="large"
                bleed
                icon={<IconSocialLinkedIn />}
                id={'linkedin-link'}
                label={'LinkedIn'}
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/tomas-bolger/',
                    '_blank',
                  )
                }
              />
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
