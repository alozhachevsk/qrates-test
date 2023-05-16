import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { NAV_LINKS } from '../../constants/navLinks';
import './index.scss';

interface NavProps {
  onNavLinkClick?: () => void;
}

const Nav: FC<NavProps> = ({onNavLinkClick}) => {
  return (
    <nav className="nav">
      {NAV_LINKS.map(({path, name}: {path: string; name: string}) => (
        <NavLink
          onClick={onNavLinkClick}
          key={name}
          className={({isActive}) => classNames('nav__link', isActive && 'nav__link--active')}
          to={path}
        >
          {name}
        </NavLink>
      ))}
    </nav>
  )
}

export default Nav;
