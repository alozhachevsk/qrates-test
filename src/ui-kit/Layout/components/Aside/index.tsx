import React, { FC } from 'react';
import { Heading } from 'ui-kit';
import { Nav } from 'ui-kit/Layout/components';
import './index.scss';

const Aside: FC = () => {
  return (
    <div className="aside">
      <div className="aside__header">
        <Heading variant="h2">Navigation</Heading>
      </div>

      <Nav/>
    </div>
  )
}

export default Aside;
