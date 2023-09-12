import ArrowRight from "../Icons/ArrowRight";
import { getGenres, getMovies } from "../utils/api";
import { Genre, MovieProps } from "../utils/types";
import MovieCard from "./MovieCard";

import { useEffect, useState } from "react";

const MovieGrid = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const tenMovies = movies.slice(0, 10);

  console.log(tenMovies);

  useEffect(() => {
    getMovies()
      .then((data) => {
        setMovies(data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getGenres()
      .then((data) => setGenres(data?.data?.genres))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getGenreNames = (genre_ids: number[] | undefined) => {
    const genreNames: string[] = (genre_ids || []).map((id) => {
      const genre = genres.find((genre) => genre.id === id);
      return genre ? genre.name : "";
    });
    return genreNames.join(", ");
  };

  return (
    <div className="px-[95px] py-[70px] sm:px-2">
      <div className="flex flex-row justify-between">
        <h3 className="font-DM font-bold text-[35px] text-black sm:w-[50px] sm:text-[25px]">
          Featured Movie
        </h3>
        <h3 className="flex flex-row gap-[8px] items-center font-DM font-normal text-[20px] text-[#BE123C]">
          See more{" "}
          <span>
            <ArrowRight />
          </span>
        </h3>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-[100px] p-10 sm:flex sm:flex-col">
          {tenMovies.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex flex-row">
                  <MovieCard
                    image={item.poster_path}
                    title={item.title}
                    id={item.id}
                    genre={getGenreNames(item.genre_ids)}
                    date={item.release_date}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieGrid;
