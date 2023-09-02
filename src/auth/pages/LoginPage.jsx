import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
  const navigate = useNavigate();

  const onSignIn = () => {
    navigate('/', { replace: true });
  };

  return (
    <main className={styles.login}>
      <h1>Login</h1>
      <button onClick={onSignIn} className={styles.login__btn}>
        Sign in
      </button>
    </main>
  );
};
