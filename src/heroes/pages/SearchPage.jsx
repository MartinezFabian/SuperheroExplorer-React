import styles from './SearchPage.module.css';

export const SearchPage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.search}>
        <form className={styles.search__form}>
          <input
            type="text"
            name="searchInput"
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
      </section>

      <section className={styles.results}></section>
    </main>
  );
};
