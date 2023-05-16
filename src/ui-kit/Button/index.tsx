import React, { FC, ReactNode, MouseEvent } from 'react';
import './index.scss';
import classNames from 'classnames';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const Button: FC<ButtonProps> = ({children, className, onClick}) => {
  return (
    <button
      className={classNames('button', className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;
