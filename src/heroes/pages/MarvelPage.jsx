import { HeroesGrid } from '../components/HeroesGrid';

import styles from './MarvelPage.module.css';

export const MarvelPage = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Marvel</h1>

      <HeroesGrid publisher="Marvel Comics"></HeroesGrid>
    </main>
  );
};
