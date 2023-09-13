import { HeroSearch } from '../components/HeroSearch';
import styles from './SearchPage.module.css';

export const SearchPage = () => {
  return (
    <main className={styles.container}>
      <section>
        <HeroSearch></HeroSearch>
      </section>

      <section className={styles.results}>
        <div className={styles.results__alert}>The hero is not found</div>
      </section>
    </main>
  );
};
