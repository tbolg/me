import { Stack, Text, TextLinkButton } from 'braid-design-system';
import React, { useEffect, useRef, useState } from 'react';

import * as styles from '../../styles.css';

interface Props {
  description: string;
}

export const ProjectDescription = ({ description }: Props) => {
  const [shouldTruncateText, setShouldTruncateText] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionRef && descriptionRef.current) {
      setShouldTruncateText(
        descriptionRef.current.offsetHeight <
          descriptionRef.current.scrollHeight ||
          descriptionRef.current.offsetWidth <
            descriptionRef.current.scrollWidth,
      );
    }
  }, []);

  return (
    <Stack space="small">
      <Text>
        <div
          ref={descriptionRef}
          className={!showFullText ? styles.lineClamp : undefined}
        >
          {description}
        </div>
      </Text>
      {shouldTruncateText && (
        <Text>
          <TextLinkButton onClick={() => setShowFullText(!showFullText)}>
            {showFullText ? 'Show less' : 'Show more...'}
          </TextLinkButton>
        </Text>
      )}
    </Stack>
  );
};
