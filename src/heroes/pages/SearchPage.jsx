import { useLocation } from 'react-router-dom';
import { HeroCard } from '../components/HeroCard';
import { HeroSearch } from '../components/HeroSearch';
import { getHeroesByName } from '../helpers/getHeroesByName';
import styles from './SearchPage.module.css';

export const SearchPage = () => {
  // Obtener el objeto location que representa la ubicación actual de la página
  const location = useLocation();

  // Crear un objeto 'searchParams' para manejar los parámetros de búsqueda de la URL
  const searchParams = new URLSearchParams(location.search);

  //Se intenta obtener el valor del parámetro de búsqueda 'q' de la URL
  const q = searchParams.get('q') ? searchParams.get('q') : '';

  const heroes = getHeroesByName(q);

  return (
    <main>
      <section className={styles.container}>
        <HeroSearch></HeroSearch>
      </section>

      <section className={styles.results}>
        <div className={styles.results__alert}>The hero is not found</div>

        <ul className={`${styles.results__grid} animate__animated animate__fadeIn`}>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero}></HeroCard>
          ))}
        </ul>
      </section>
    </main>
  );
};
