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
  IconDownload,
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
                icon={<IconDownload />}
                id="download-resume"
                label="Download resume"
                onClick={() =>
                  window.open('/resume_tomas_bolger.pdf', '_blank')
                }
              />

              <ButtonIcon
                size="large"
                bleed
                icon={<IconSocialGitHub />}
                id="github-link"
                label="GitHub"
                onClick={() =>
                  window.open('https://github.com/tbolg', '_blank')
                }
              />
              <ButtonIcon
                size="large"
                bleed
                icon={<IconSocialLinkedIn />}
                id="linkedin-link"
                label="LinkedIn"
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/tomas-bolger/',
                    '_blank',
                  )
                }
              />
            </Inline>
            <Inline space="xsmall" alignY="center">
              <ButtonIcon
                icon={<IconMail />}
                id="mail-button"
                label="Get in contact"
                onClick={() => {
                  window.open(
                    'mailto:tbolger.business@gmail.com?subject=Hi%20Tomas!%20We%20want%20to%20hire%20you!',
                  );
                }}
              />
              <Text>tbolger.business@gmail.com</Text>
            </Inline>
          </Stack>
        </Column>
      </Columns>
    </Box>
  );
};
