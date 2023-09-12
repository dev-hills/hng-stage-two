import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";
import Youtube from "../Icons/Youtube";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-[36px] pb-[75px] m-5 text-center">
        <div className="flex flex-row items-center gap-[50px]">
          <Facebook />
          <Instagram />
          <Twitter />
          <Youtube />
        </div>

        <div>
          <ul className="flex flex-row items-center gap-[50px]">
            <li className="font-DM font-bold text-center text-[18px] text-[#111827]">
              Conditions of Use
            </li>
            <li className="font-DM font-bold text-center text-[18px] text-[#111827]">
              Privacy & Policy
            </li>
            <li className="font-DM font-bold text-center text-[18px] text-[#111827]">
              Press Room
            </li>
          </ul>
        </div>

        <div className="font-DM font-bold text-[18px] text-[#6B7280]">
          &copy; 2021 MovieBox by Adriana Eka Prayudha
        </div>
      </div>
    </div>
  );
};

export default Footer;
