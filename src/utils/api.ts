/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

// const url = "https://api.themoviedb.org/3/discover/movie";
const url2 = "https://api.themoviedb.org/3/genre/movie/list?language=en";
const main_url = "https://api.themoviedb.org/3";
const urll = "https://api.themoviedb.org/3/movie/top_rated";

export const getMovies = async () => {
  return await axios.get(
    `${urll}?sort_by=popularity.desc&api_key=6b97dd1be117bedf820a30683b8fb3ae`
  );
};

export const getGenres = async () => {
  return await axios.get(`${url2}&api_key=6b97dd1be117bedf820a30683b8fb3ae`);
};

export const getMovie = async (id: number) => {
  return await axios.get(
    `${main_url}/movie/${id}?api_key=6b97dd1be117bedf820a30683b8fb3ae&append_to_response=videos`
  );
};

export const getMovieCast = async (id: number) => {
  return await axios.get(
    `${main_url}/movie/${id}/credits?api_key=6b97dd1be117bedf820a30683b8fb3ae`
  );
};
