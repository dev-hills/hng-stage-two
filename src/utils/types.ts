export type Movie = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: Array<number>;
  id?: number;
  originalLanguage?: string;
  originalTitle?: string;
  overview?: string;
  popularity?: number;
  posterPath?: string;
  releaseDate?: string;
  title?: string;
  video?: boolean;
  voteAverage?: number;
  voteCount?: number;
};

export type MovieProps = {
  id: number;
  title: string;
  poster_path: string;
  genre_ids?: Array<number>;
  release_date: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type GenreResponse = {
  genres: Genre[];
};

export type SinleMain = {
  genres?: Genre[];
  homepage: string;
  id: number;
  original_title: string;
  overview: string;
  release_date: Date;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
