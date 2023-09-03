import { HeroesGrid } from '../components/HeroesGrid';

import styles from './DcPage.module.css';

export const DcPage = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>DC</h1>

      <HeroesGrid publisher="DC Comics"></HeroesGrid>
    </main>
  );
};
