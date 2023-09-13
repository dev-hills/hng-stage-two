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
    <div className="flex flex-col text-black w-[250px]">
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
      <Link to={`/movies/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt=""
          width={250}
          data-testid="movie-poster"
        />
      </Link>
      <div className="bg-white text-black w-[250px] font-main  pt-[12px]">
        <p
          className="font-DM font-bold text-[12px] text-[#9CA3AF]"
          data-testid="movie-release-date"
        >
          {date}
        </p>
        <div
          className="text-[20px] font-DM font-bold text-black"
          data-testid="movie-title"
        >
          {title}
        </div>
        <p className="font-DM font-bold text-[12px] text-[#9CA3AF]">{genre}</p>
      </div>
    </div>
  );
};

export default MovieCard;
