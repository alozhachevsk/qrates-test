import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Heading } from 'ui-kit';
import { Nav } from 'ui-kit/Layout/components';
import { CrossIcon, LogoIcon } from 'ui-kit/icons';
import { routes } from 'navigation/routes';
import './index.scss';

interface MobileMenuProps {
  isOpened: boolean;
  onIconClick: () => void;
  onNavLinkClick: () => void;
  onLogoClick: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({isOpened = false, onIconClick, onNavLinkClick, onLogoClick}) => {
  return (
    <div className={classNames('mobile-menu', isOpened && 'mobile-menu--opened')}>
      <div className="mobile-menu-header">
        <NavLink to={routes.root} onClick={onLogoClick}>
          <LogoIcon className="mobile-menu-header__logo" fill="#fff"/>
        </NavLink>

        <CrossIcon className="mobile-menu-header__icon" onClick={onIconClick}/>
      </div>

      <div className="mobile-menu__title">
        <Heading variant="h2">Navigation</Heading>
      </div>

      <Nav onNavLinkClick={onNavLinkClick}/>
    </div>
  )
}

export default MobileMenu;
