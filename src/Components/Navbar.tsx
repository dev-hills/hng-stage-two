import Hamburger from "../Icons/Hamburger";
import Search from "../Icons/Search";
import Logo from "/Logo.png";
const Navbar = () => {
  return (
    <div className="absolute z-10 w-[100%]">
      <div className="flex flex-row items-center justify-between px-[95px] py-[20px] sm:px-[15px]">
        <div className="sm:w-[120px]">
          <img src={Logo} alt="" />
        </div>

        <div className="sm:hidden border-2 border-white px-[10px] py-[6px] w-[500px] h-[36px] rounded-[6px] flex flex-row justify-between items-center">
          <input
            type="text"
            name=""
            id=""
            className="bg-transparent border-none outline-none text-white placeholder-white w-[450px]"
          />

          <Search />
        </div>

        <div className="text-white flex flex-row items-center gap-[27px] sm:gap-5 font-DM text-[16px] font-bold">
          <span className="">Sign in</span>
          <Hamburger />
        </div>
      </div>

      <div>
        <div className="hidden sm:border-2 sm:border-white sm:px-[10px] sm:py-[6px] sm:w-auto sm:m-4 sm:h-[36px] sm:rounded-[6px] sm:flex sm:flex-row sm:justify-between sm:items-center">
          <input
            type="text"
            name=""
            id=""
            className="bg-transparent border-none outline-none text-white placeholder-white w-[450px]"
          />

          <Search />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
