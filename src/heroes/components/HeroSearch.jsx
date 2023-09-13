import { useState } from 'react';
import styles from './HeroSearch.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

export const HeroSearch = () => {
  const navigate = useNavigate();

  // Obtener el objeto location que representa la ubicación actual de la página
  const location = useLocation();

  // Crear un objeto 'searchParams' para manejar los parámetros de búsqueda de la URL
  const searchParams = new URLSearchParams(location.search);

  //Se intenta obtener el valor del parámetro de búsqueda 'q' de la URL
  const q = searchParams.get('q') ? searchParams.get('q') : '';

  console.log(q);

  const [formState, setFormState] = useState('');

  const onInputChange = (e) => {
    setFormState(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const searchValue = formState.toLowerCase().trim();

    if (searchValue.length <= 1) return;

    navigate(`?q=${searchValue}`);

    setFormState('');
  };

  return (
    <form onSubmit={onSubmitForm} className={styles.search}>
      <input
        type="text"
        name="searchInput"
        onChange={onInputChange}
        value={formState}
        placeholder="Search a hero"
        autoComplete="off"
        className={styles.search__input}
      />
      <button type="submit" className={styles.search__btn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#dfdfdf"
          className={styles.search__icon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
};
