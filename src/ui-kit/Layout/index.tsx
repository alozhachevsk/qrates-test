import React, { FC, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { routes } from 'navigation/routes';
import { Header, Aside, MobileMenu } from './components';
import './index.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {pathname} = useLocation();
  const isHomePage = pathname === routes.root;

  return (
    <div className="layout">
      <MobileMenu
        isOpened={isMenuOpen}
        onIconClick={() => setIsMenuOpen(false)}
        onNavLinkClick={() => setIsMenuOpen(false)}
        onLogoClick={() => setIsMenuOpen(false)}
      />

      <Header isHomePage={isHomePage} onIconClick={() => setIsMenuOpen(true)}/>

      <main className={classNames('main', isHomePage && 'main--home')}>
        {!isHomePage && <Aside/>}
        {children}
      </main>
    </div>
  )
}

export default Layout;
