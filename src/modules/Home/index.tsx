import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Button } from 'ui-kit';
import { routes } from 'navigation/routes';
import './index.scss';
import { BigLogoIcon } from '../../ui-kit/icons';

export const Home: FC = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.about);
  }

  return (
    <section className="home">
      <Heading variant="h1" className="home__h1">QRATES</Heading>
      <Heading className="home__h3">Music in your hands</Heading>
      <Button className="home__btn" onClick={handleClick}>Start</Button>
      <div className="decor">
        <BigLogoIcon className="decor__svg"/>
      </div>
    </section>
  )
}
