import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

import styles from './HeroesGrid.module.css';

export const HeroesGrid = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul className={styles.grid}>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero}></HeroCard>
      ))}
    </ul>
  );
};
