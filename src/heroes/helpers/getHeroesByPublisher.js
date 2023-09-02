import { heroes } from '../data/heroes';

export function getHeroesByPublisher(publisher) {
  const validPublisher = ['DC Comics', 'Marvel Comics'];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  heroes.filter((hero) => hero.publisher === publisher);
}
