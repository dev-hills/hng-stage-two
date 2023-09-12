import Home from "/Home.png";
import video from "/video.png";
import TV from "/TV.png";
import upcoming from "/upcoming.png";
import Logo2 from "/Logo2.png";
import logout from "/logout.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Link to="/">
        <img src={Logo2} alt="" className="py-[38px] px-[20px]" />
      </Link>

      <div className="flex flex-col items-start gap-[10px] pt-[0px] sm:gap-[50px]">
        <div className="flex items-center gap-[15px] font-semibold text-[20px] text-[#666666] px-[20px] w-[100%] py-[20px] hover:border-[6px] hover:border-t-0 hover:border-r-[#BE123C] hover:border-b-0 hover:border-l-0 hover:text-[#BE123C] hover:bg-[#f8e7eb] cursor-pointer">
          <span>
            <img src={Home} alt="" />
          </span>
          Home
        </div>

        <div className="bg-[#f8e7eb] flex items-center gap-[15px] font-semibold text-[20px] py-[28px] px-[20px] w-[100%] border-[6px] border-t-0 border-r-[#BE123C] border-b-0 border-l-0 text-[#BE123C] cursor-pointer">
          <span>
            <img src={video} alt="" />
          </span>
          Movies
        </div>

        <div className="flex items-center gap-[15px] font-semibold text-[20px] text-[#666666] px-[20px] w-[100%] py-[20px] hover:border-[6px] hover:border-t-0 hover:border-r-[#BE123C] hover:border-b-0 hover:border-l-0 hover:text-[#BE123C] hover:bg-[#f8e7eb] cursor-pointer">
          <span>
            <img src={TV} alt="" />
          </span>
          TV Series
        </div>

        <div className="flex items-center gap-[15px] font-semibold text-[20px] sm:text-[17px] text-[#666666] px-[20px] w-[100%] py-[20px] hover:border-[6px] hover:border-t-0 hover:border-r-[#BE123C] hover:border-b-0 hover:border-l-0 hover:text-[#BE123C] hover:bg-[#f8e7eb] cursor-pointer">
          <span>
            <img src={upcoming} alt="" />
          </span>
          Upcoming
        </div>
      </div>

      <div className="py-[20px] px-[20px] bg-[#f8e7eb] mx-[28px] my-[19px] border-[1px] border-[#BE123C] rounded-[6px] flex flex-col items-start gap-[10px] sm:w-auto">
        <p className="font-semibold text-[15px] leading-[22.5px]">
          Play movie quizes and earn free tickets
        </p>
        <p className="font-medium text-[12px] leading-[22.5px]">
          50k people are playing now
        </p>
        <p className="bg-[#f0c8d2] cursor-pointer rounded-[30px] font-medium text-[12px] text-[#BE123C] flex justify-center py-[6px] whitespace-nowrap px-[17px] sm:w-auto sm:px-1">
          Start playing
        </p>
      </div>

      <div className="py-[20px] cursor-pointer px-[20px] font-semibold text-[20px] text-[#666666] flex flex-row items-center gap-[10px]">
        <span>
          <img src={logout} alt="" />
        </span>
        Logout
      </div>
    </div>
  );
};

export default Sidebar;
