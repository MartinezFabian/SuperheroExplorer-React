import PropTypes from 'prop-types';

import styles from './HeroCard.module.css';
import { Link } from 'react-router-dom';

export const HeroCard = ({ id, superhero, alter_ego, first_appearance }) => {
  const heroImg = `/img/${id}.jpg`;

  return (
    <article className={styles.card}>
      <section className={styles.card__section}>
        <img src={heroImg} alt={superhero} className={styles.card__image} />
      </section>
      <section className={styles.information}>
        <h3 className={styles.information__name}>{superhero}</h3>
        <p className={styles.information__alterego}>{alter_ego}</p>

        <p className={styles.information__appearance}>{first_appearance}</p>

        <Link to={`/hero/${id}`} className={styles.link}>
          Mas...
        </Link>
      </section>
    </article>
  );
};

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
};
