import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import PropTypes from 'prop-types';

import styles from './HeroesGrid.module.css';
import { useMemo } from 'react';

export const HeroesGrid = ({ publisher }) => {
  /* memorizar el resultado de la función, el resultado se calculará solo cuando el publisher cambie. Si 
    el publisher permanece igual, el valor memorizado se reutilizará */
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <ul className={`${styles.grid} animate__animated animate__fadeIn`}>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero}></HeroCard>
      ))}
    </ul>
  );
};

HeroesGrid.propTypes = {
  publisher: PropTypes.string.isRequired,
};
