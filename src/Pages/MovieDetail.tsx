/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../Components/Sidebar";
import { getMovie } from "../utils/api";
import Trailer from "../Components/Trailer";

const MovieDetail = () => {
  const [movieInfo, setMovieInfo] = useState<any>({});
  const { id } = useParams();

  useEffect(() => {
    getMovie(id as any).then((data) => {
      setMovieInfo(data.data);
      console.log(data.data);
    });
  }, [id]);

  const mainTrailer = movieInfo.videos?.results.find(
    (video: { type: string; name: string }) => video.type === "Trailer"
  );

  const date = new Date(movieInfo.release_date);
  const utcDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className=" w-[100%] h-[100%] flex">
      <div className="border-[1px] border-[rgba(0, 0, 0, 0.3)] w-[15%] sm:w-[40%] first-letter:rounded-tr-[45px] rounded-br-[45px]">
        <Sidebar />
      </div>

      <div className="w-[100%] px-[37px] pt-[38px] rounded-lg sm:px-2">
        <div>
          {mainTrailer && (
            <Trailer videoKey={mainTrailer.key} height="500px" width="100%" />
          )}
        </div>

        <div className="pt-[30px] flex flex-row items-center gap-7 sm:flex-col sm:items-start sm:gap-2">
          <h1
            data-testid="movie-title"
            className="font-bold text-[24px] text-[#404040]"
          >
            {movieInfo.title} -
          </h1>

          <h1
            data-testid="movie-release-date"
            className="font-bold text-[24px] text-[#404040]"
          >
            {utcDate}
          </h1>
        </div>

        <div className="py-[5px] flex flex-col items-start gap-7">
          <h1
            data-testid="movie-runtime"
            className="font-bold text-[24px] text-[#404040] p-0 m-0"
          >
            Runtime: {movieInfo.runtime} Minutes
          </h1>

          <p
            data-testid="movie-overview"
            className="font-medium text-[17px] text-[#404040] w-[900px] sm:w-auto"
          >
            {movieInfo.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
