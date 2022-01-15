export interface GenresI {
  id: number;
  name: string;
}

export interface MovieI {
  id: number;
  backdrop_path: string;
  budget: number;
  genres: Array<GenresI>;
  homepage: string;
  imdb_id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}
