import {
  Column,
  Columns,
  Heading,
  IconSocialGitHub,
  Stack,
  Inline,
  ButtonIcon,
  IconDownload,
} from 'braid-design-system';
import React from 'react';

import { Project } from '../../types/projects';

import { ProjectDescription } from './components/ProjectDescription';

interface Props {
  projects: Project[];
}

export const Projects = ({ projects }: Props) => (
  <Stack space="medium" dividers>
    <Heading align="center" level="1">
      Projects
    </Heading>
    <Columns space="gutter" collapseBelow="tablet">
      {projects.map((project) => (
        <Column key={project.name} width="1/2">
          <Stack space="medium">
            <Inline alignY="center" space="xsmall">
              <Heading level="4">{project.name} |</Heading>
              <ButtonIcon
                size="large"
                bleed
                icon={<IconSocialGitHub />}
                id={`${project.name}-github-url`}
                label={'Open source code'}
                onClick={() => window.open(project.githubUrl, '_blank')}
              />
              {project.downloadUrl ? (
                <ButtonIcon
                  size="large"
                  bleed
                  icon={<IconDownload />}
                  id={`${project.name}-github-url`}
                  label={'Download application'}
                  onClick={() => window.open(project.githubUrl, '_blank')}
                />
              ) : null}
            </Inline>
            <ProjectDescription description={project.description} />
          </Stack>
        </Column>
      ))}
    </Columns>
  </Stack>
);
