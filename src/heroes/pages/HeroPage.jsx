import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';

import styles from './HeroPage.module.css';

export const HeroPage = () => {
  const { id } = useParams();

  const hero = getHeroById(id);

  if (!hero) {
    return <Navigate to="/404"></Navigate>;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

  const heroImg = `/assets/img/${id}.jpg`;

  return (
    <main className={styles.main}>
      <section className={styles.main__section}>
        <img src={heroImg} alt={superhero} className={styles.main__img} />
      </section>

      <section className={styles.information}>
        <h2 className={styles.information__heading}>{superhero}</h2>

        <div>
          <p className={styles.information__text}>
            Alter Ego: <span className={styles.information__span}>{alter_ego}</span>
          </p>
          <p className={styles.information__text}>
            Publisher: <span className={styles.information__span}>{publisher}</span>
          </p>
          <p className={styles.information__text}>
            First Appearance: <span className={styles.information__span}>{first_appearance}</span>
          </p>
        </div>

        <div>
          <h3 className={styles.information__heading}>Characters</h3>
          <p>{characters}</p>
        </div>

        <button className={styles.information__btn}>Back</button>
      </section>
    </main>
  );
};
