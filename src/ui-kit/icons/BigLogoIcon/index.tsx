import React, { FC } from 'react';

interface BigLogoIconProps {
  fill?: string;
  className?: string;
}

const BigLogoIcon: FC<BigLogoIconProps> = ({ fill = '#fff', className }) => {
  return (
    <svg className={className} width="154" height="141" viewBox="0 0 154 141" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M86.365 106.086L86.1122 105.546C112.157 89.7795 120.843 55.9617 105.697 29.2896C90.5522 2.6175 57.0888 -7.20084 30.2398 7.14991C3.39075 21.5007 -7.0715 54.7971 6.64811 82.2312C20.3677 109.665 53.2755 121.252 80.853 108.357C93.8619 135.86 126.494 147.742 153.838 134.932L130.614 85.3571L86.365 106.086ZM39.8784 65.1141C36.6318 58.1916 37.844 50.0097 42.9497 44.3841C48.0553 38.7586 56.0487 36.7976 63.202 39.4156C70.3553 42.0336 75.2594 48.7151 75.6271 56.3438C75.9949 63.9725 71.7539 71.046 64.8821 74.2652C60.3781 76.3776 55.2129 76.6001 50.5235 74.8838C45.8341 73.1675 42.0048 69.6531 39.8784 65.1141Z" fill={fill}/>
    </svg>
  )
}

export default BigLogoIcon;
