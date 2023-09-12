/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import bookmarkUncheck from "/bookmarkUncheck.png";
import bookmarkCheck from "/bookmarkCheck.png";
import { useState } from "react";

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
    <div
      className="flex flex-col text-black w-[250px]"
      data-testid="movie-card"
    >
      {isBookmarked ? (
        <div
          className="rounded-full p-[5px]  flex items-center absolute ml-[205px] mt-[10px]"
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          <img src={bookmarkCheck} alt="" width={30} className=" " />
        </div>
      ) : (
        <div
          className="rounded-full p-[5px]  flex items-center absolute ml-[205px] mt-[10px]"
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          <img src={bookmarkUncheck} alt="" width={30} className=" " />
        </div>
      )}
      <Link to={`/movie/${id}`}>
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
