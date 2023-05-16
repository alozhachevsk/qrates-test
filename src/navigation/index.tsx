import React, { FC } from 'react';
import { Routes, Route} from 'react-router-dom';

import { routes } from './routes';

import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Catalog } from '../pages/catalog';
import { Layout } from 'ui-kit';

export const RoutesComponent: FC = () => (
  <Layout>
    <Routes>
      <Route path={routes.root} element={<Home/>} />
      <Route path={routes.about} element={<About/>} />
      <Route path={routes.catalog} element={<Catalog/>} />
    </Routes>
  </Layout>
);
