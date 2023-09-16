import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
  const navigate = useNavigate();

  const { authState, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();

    navigate('/login', { replace: true });
  };

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

      <div className={styles.nav__container}>
        <p className={styles.nav__username}>{authState?.username}</p>
        <button onClick={onLogout} className={styles.nav__btn}>
          Logout
        </button>
      </div>
    </nav>
  );
};
