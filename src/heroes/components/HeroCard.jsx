import PropTypes from 'prop-types';

export const HeroCard = ({ id, superhero, alter_ego, first_appearance }) => {
  const heroImg = `./assets/img/${id}.jpg`;

  return (
    <article>
      <section>
        <img src={heroImg} alt={superhero} />
      </section>
      <section>
        <h3>{superhero}</h3>
        <p>{alter_ego}</p>

        <p>{first_appearance}</p>
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
