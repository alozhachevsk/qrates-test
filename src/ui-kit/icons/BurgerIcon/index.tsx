import React, { FC } from 'react';

interface BurgerIconProps {
  className?: string;
  fill?: string;
  onClick?: () => void;
}

const BurgerIcon: FC<BurgerIconProps> = ({ fill = '#000', className, onClick }) => {
  return (
    <svg className={className} onClick={onClick} width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0.00386849" y1="9.50001" x2="28.0216" y2="9.57226" stroke={fill} strokeWidth="3"/>
      <line x1="0.00386849" y1="1.50001" x2="28.0216" y2="1.57226" stroke={fill} strokeWidth="3"/>
      <line x1="28.0416" y1="17.569" x2="0.0237671" y2="17.6182" stroke={fill} strokeWidth="3"/>
    </svg>
  )
}

export default BurgerIcon;
