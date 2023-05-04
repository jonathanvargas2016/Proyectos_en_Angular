export interface HeroeInterface {
  id?: string;
  superhero: string;
  publisher: Publisher;
  alterEgo: string;
  firstAppearance: string;
  characters: string;
  altImg?: string;
}

export enum Publisher {
  DCComics = 'DC Comics',
  MarvelComics = 'Marvel Comics',
}
