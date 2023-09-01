import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.nav__heading}>Superhero Explorer</h1>

      <div className={styles.nav__container}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.nav__link} ${styles.active}` : styles.nav__link
          }
          to="/marvel"
        >
          Marvel
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.nav__link} ${styles.active}` : styles.nav__link
          }
          to="/dc"
        >
          DC
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.nav__link} ${styles.active}` : styles.nav__link
          }
          to="/search"
        >
          Search
        </NavLink>
      </div>

      <button className={styles.nav__btn}>Logout</button>
    </nav>
  );
};
