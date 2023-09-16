/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { useState } from "react";
import Heart1 from "/Heart1.png";
import Heart2 from "/Heart2.png";

type MovieProps = {
  title: string;
  id: number;
  image: string;
  genre_ids?: number[];
  genre: string;
  date: string;
};

const MovieCard = ({ title, id, image, genre, date }: MovieProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <Link to={`/movies/${id}`}>
      <div
        data-testid="movie-card"
        className="flex flex-col text-black w-[250px]"
      >
        <div>
          {isBookmarked ? (
            <div
              className="rounded-full p-[5px] bg-[#F3F4F680] flex items-center absolute ml-[205px] mt-[10px]"
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <img src={Heart2} alt="" width={30} className=" " />
            </div>
          ) : (
            <div
              className="rounded-full p-[5px] bg-[#F3F4F680] flex items-center absolute ml-[205px] mt-[10px]"
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <img src={Heart1} alt="" width={30} className=" " />
            </div>
          )}
        </div>

        <div data-testid="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${image}`}
            alt=""
            width={250}
          />
        </div>

        <p
          data-testid="movie-release-date"
          className="font-DM font-bold text-[12px] text-[#9CA3AF] pt-[10px]"
        >
          {date}
        </p>

        <div
          data-testid="movie-title"
          className="text-[20px] font-DM font-bold text-black"
        >
          {title}
        </div>

        <p className="font-DM font-bold text-[12px] text-[#9CA3AF]">{genre}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
