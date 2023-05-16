import React, { FC } from 'react';

interface CrossIconProps {
  className?: string;
  fill?: string;
  onClick?: () => void;
}

const CrossIcon: FC<CrossIconProps> = ({ fill = '#fff', className, onClick }) => {
  return (
    <svg className={className} onClick={onClick} width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="1.16369" y1="1.06971" x2="20.9753" y2="20.8813" stroke={fill} strokeWidth="3"/>
      <line x1="1.06361" y1="20.9389" x2="20.8752" y2="1.12724" stroke={fill} strokeWidth="3"/>
    </svg>
  )
}

export default CrossIcon;
