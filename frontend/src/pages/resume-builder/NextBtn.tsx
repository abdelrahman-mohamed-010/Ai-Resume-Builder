import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

interface NextBtnProps {
  link: string;
  NextTxt: string;
}

const NextBtn: React.FC<NextBtnProps> = ({ link, NextTxt }) => {
  return (
    <Link
      to={`/builder/${link}`}
      className=" bg-black px-5 py-3 text-lg rounded-full text-white font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-1 text-nowrap dark:bg-accent dark:text-black "
    >
      Next : {NextTxt} <IoIosArrowForward className=" mt-1" />
    </Link>
  );
};

export default NextBtn;
