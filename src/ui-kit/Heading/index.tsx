import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './index.scss';

interface HeadingProps {
  children: ReactNode;
  variant?: string;
  className?: string;
}

const Heading: FC<HeadingProps> = ({variant = 'h3', className, children}) => {
  const Tag = variant as keyof JSX.IntrinsicElements;

  return (
    <Tag className={classNames(variant, className)}>{children}</Tag>
  )
}

export default Heading;
