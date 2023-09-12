/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getMovies } from "../utils/api";
import { Movie } from "../utils/types";
import imdb from "/imdb.png";
import tomatoes from "/tomatoes.png";
import Play from "../Icons/Play";

const Hero = () => {
  const [movie, setMovie] = useState<Movie>({});

  useEffect(() => {
    const randomValue = Math.floor(Math.random() * 20);
    getMovies()
      .then((data) => setMovie(data?.data?.results[randomValue]))
      //   .then((data) => console.log(data?.data?.results[randomValue]))
      .catch((err) => console.log(err));
  }, []); //

  return (
    <div>
      <div className="z-[10] absolute px-[95px] sm:px-[0px] sm:m-5 py-[150px] w-[1000px] sm:w-[350px] flex flex-col gap-[20px]">
        <h1 className="font-DM text-white text-[60px] font-bold sm:text-[40px]">
          {movie.title}
        </h1>

        <div className="flex flex-row gap-[34px]">
          <div className="flex flex-row items-center gap-[10px] text-white font-DM font-medium text-[22px]">
            <img src={imdb} alt="" width={35} />
            86.0/100
          </div>

          <div className="flex flex-row items-center gap-[10px] text-white font-DM font-medium text-[22px]">
            <img src={tomatoes} alt="" width={20} />
            97%
          </div>
        </div>

        <div>
          <p className="w-[500px] sm:w-[350px] text-white font-DM font-normal text-[15px]">
            {movie?.overview}
          </p>
        </div>

        <button className="flex items-center px-[16px] py-[6px] rounded-[6px] gap-[10px] text-white bg-[#BE123C] w-[170px] whitespace-nowrap h-[40px]">
          <span>
            <Play />
          </span>
          WATCH TRAILER
        </button>
      </div>

      <div className="-z-10">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          className="w-[100%] h-[600px] object-cover filter brightness-50"
        />
      </div>
    </div>
  );
};

export default Hero;
