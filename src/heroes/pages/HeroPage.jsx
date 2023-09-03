import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {
  const { id } = useParams();

  const hero = getHeroById(id);

  if (!hero) {
    return <Navigate to="/404"></Navigate>;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

  const heroImg = `/assets/img/${id}.jpg`;

  return (
    <main>
      <section>
        <img src={heroImg} alt={superhero} />
      </section>

      <section>
        <h2>{superhero}</h2>

        <div>
          <p>
            Alter Ego: <span>{alter_ego}</span>
          </p>
          <p>
            Publisher: <span>{publisher}</span>
          </p>
          <p>
            First Appearance: <span>{first_appearance}</span>
          </p>
        </div>

        <div>
          <h3>Characters</h3>
          <p>{characters}</p>
        </div>

        <button>Back</button>
      </section>
    </main>
  );
};
