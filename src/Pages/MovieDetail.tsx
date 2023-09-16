/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../Components/Sidebar";
import { getMovie, getMovieCast } from "../utils/api";
import Trailer from "../Components/Trailer";
import ticket from "/ticket.png";
import watch from "/watch.png";
import starRating from "/starRating.png";
import otherMovie from "/otherMovie.png";
import { Oval } from "react-loader-spinner";

const MovieDetail = () => {
  const [movieInfo, setMovieInfo] = useState<any>({});
  const [star1, setStar1] = useState<any>("");
  const [star2, setStar2] = useState<any>("");
  const [star3, setStar3] = useState<any>("");
  const [director, setDirector] = useState<any>("");
  const [writer1, setWriter1] = useState<any>("");
  const [writer2, setWriter2] = useState<any>("");
  const [writer3, setWriter3] = useState<any>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const delayFetch = setTimeout(() => {
      getMovie(id as any)
        .then((data) => {
          setMovieInfo(data.data);
          setLoading(false);
        })
        .catch(() => {
          setError("Error loading data. Please try again.");
          setLoading(false);
        });
    }, 3000);
    return () => clearTimeout(delayFetch);
  }, [id]);

  useEffect(() => {
    const delayFetch = setTimeout(() => {
      getMovieCast(id as any)
        .then((data) => {
          // setMovieCast(data.data.cast);
          setStar1(data.data.cast[0].name);
          setStar2(data.data.cast[1].name);
          setStar3(data.data.cast[2].name);
          setDirector(
            data.data.crew.filter((crew: any) => crew?.job === "Director")[0]
              ?.name
          );
          setWriter1(
            data.data.crew.filter((crew: any) => crew?.job === "Writer")[0]
              ?.name
          );
          setWriter2(
            data.data.crew.filter((crew: any) => crew?.job === "Writer")[1]
              ?.name
          );
          setWriter3(
            data.data.crew.filter((crew: any) => crew?.job === "Writer")[2]
              ?.name
          );
          setLoading(false);
        })
        .catch(() => {
          setError("Error loading data. Please try again.");
          setLoading(false);
        });
    }, 3000);
    return () => clearTimeout(delayFetch);
  }, [id]);

  const mainTrailer = movieInfo.videos?.results.find(
    (video: { type: string; name: string }) => video.type === "Trailer"
  );

  // const date = new Date(movieInfo.release_date);
  // const utcDate = date.toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center p-[200px] text-[22px] font-DM font-semibold">
        <Oval
          height={100}
          width={100}
          color="#BE123C"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#BE123C"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center p-[200px] text-[22px] font-DM font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div>
      {!loading ? (
        <div className=" w-[100%] h-[100%] flex flex-row">
          <div className="border-[1px] border-[rgba(0, 0, 0, 0.3)] w-[15%] sm:w-[39%] first-letter:rounded-tr-[45px] rounded-br-[45px] fixed sm:relative">
            <Sidebar />
          </div>

          <div className="w-[100%] pl-[250px] sm:pl-[30px] mr-6 pt-[38px] rounded-lg sm:px-2">
            <div>
              {mainTrailer && (
                <Trailer
                  videoKey={mainTrailer.key}
                  height="500px"
                  width="100%"
                />
              )}
            </div>

            <div className="flex flex-row py-[31px]">
              <div className="flex flex-col gap-[25px]">
                <div className="flex flex-row items-center gap-[10px] sm:flex-col sm:items-start">
                  <div className="font-bold text-[24px] text-[#404040]">
                    <h1 data-testid="movie-title">{movieInfo.title}</h1>
                  </div>

                  <h1 className="font-bold text-[24px] text-[#404040]">·</h1>

                  <div className="font-bold text-[24px] text-[#404040]">
                    <h1 data-testid="movie-release-date">
                      {movieInfo.release_date}
                    </h1>
                  </div>

                  <h1 className="font-bold text-[24px] text-[#404040]">·</h1>

                  <h1 className="font-bold text-[24px] text-[#404040]">
                    PG-13
                  </h1>

                  <h1 className="font-bold text-[24px] text-[#404040]">·</h1>

                  <div className="font-bold text-[24px] text-[#404040] p-0 m-0">
                    <h1 data-testid="movie-runtime">{movieInfo.runtime}</h1>
                  </div>

                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="text-[#BE123C] w-[85px] h-[30px] border-[1px] border-[#F8E7EB] flex items-center justify-center rounded-[15px]">
                      Action
                    </div>
                    <div className="text-[#BE123C] w-[85px] h-[30px] border-[1px] border-[#F8E7EB] flex items-center justify-center rounded-[15px]">
                      Drama
                    </div>
                  </div>
                </div>

                <div className="font-medium text-[17px] text-[#404040] w-[900px] sm:w-auto">
                  <p data-testid="movie-overview">{movieInfo.overview}</p>
                </div>

                <div className="flex flex-col gap-[31px]">
                  <p className="font-normal text-[20px] text-[#333333]">
                    Director: <span className="text-[#BE123C]">{director}</span>
                  </p>

                  <p className="font-normal text-[20px] text-[#333333]">
                    Writers:{" "}
                    <span className="text-[#BE123C]">
                      {writer1}, {writer2}, {writer3}
                    </span>
                  </p>

                  <p className="font-normal text-[20px] text-[#333333]">
                    Stars:{" "}
                    <span className="text-[#BE123C]">
                      {star1}, {star2}, {star3}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-[20px] sm:hidden">
                <img src={starRating} alt="" />
                <button className="flex flex-row w-[350px] h-[55px] bg-[#BE123C] items-center gap-[15px] rounded-[10px] justify-center text-white font-semibold text-[20px]">
                  <img src={ticket} alt="" />
                  See Showtimes
                </button>
                <button className="flex flex-row w-[350px] h-[55px] bg-[#f8e7eb] border-[1px] border-[#BE123C] items-center gap-[15px] rounded-[10px] justify-center text-[#333333] font-semibold text-[20px]">
                  <img src={watch} alt="" />
                  More watch options
                </button>
                <img src={otherMovie} alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MovieDetail;
