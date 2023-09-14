import { heroes } from '../data/heroes';

export function getHeroesByName(nameSearched) {
  nameSearched = nameSearched.toLowerCase().trim();

  if (nameSearched.length === 0) return [];

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(nameSearched));
}
