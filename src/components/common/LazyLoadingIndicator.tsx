import React from 'react';

import Spinner, { SpinnerProps } from './Spinner';

interface Props {
  className?: string;
  size?: SpinnerProps['size'];
  as?: React.ElementType;
}

/**
 * Simple block wrapper around a centered `Spinner` with some top
 * margin.
 */
export default function LazyLoadingIndicator({
  className,
  size = 'lg',
  as: Tag = 'div',
}: Props) {
  return (
    <Tag style={{ marginTop: '10px', alignText: 'center' }} >
      <Spinner size={size} />
    </Tag>
  );
}   