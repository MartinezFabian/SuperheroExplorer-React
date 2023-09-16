import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formState, setFormState] = useState('');

  const onInputChange = (e) => {
    setFormState(e.target.value);
  };

  const onSignIn = (e) => {
    e.preventDefault();

    const username = formState.trim().split(' ').join('');

    if (username.length === 0) return;

    login(username);

    navigate('/', { replace: true });
  };

  return (
    <main className={styles.login}>
      <h1>Login</h1>

      <form onSubmit={onSignIn} className={styles.login__form}>
        <input
          type="text"
          onChange={onInputChange}
          value={formState}
          placeholder="Username"
          autoComplete="off"
          className={styles.login__input}
        />

        <button type="submit" className={styles.login__btn}>
          Sign in
        </button>

        <div
          className={`${styles.login__alert} animate__animated animate__fadeIn`}
          style={{ display: formState.trim().length === 0 ? '' : 'none' }}
        >
          Type the username...
        </div>
      </form>
    </main>
  );
};
