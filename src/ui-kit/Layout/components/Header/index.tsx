import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'navigation/routes';
import { LogoIcon, BurgerIcon } from 'ui-kit/icons';
import './index.scss';

interface HeaderProps {
  isHomePage?: boolean;
  onIconClick: () => void;
}

const Header: FC<HeaderProps> = ({isHomePage, onIconClick}) => {
  return (
    <header className="header">
      <NavLink to={routes.root}>
        <LogoIcon className="header__logo"/>
      </NavLink>

      {!isHomePage && <BurgerIcon className="header__icon" onClick={onIconClick}/>}
    </header>
  )
}

export default Header;
