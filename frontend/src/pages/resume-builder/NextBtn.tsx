import { IoIosArrowForward } from "react-icons/io";

interface NextBtnProps {
  NextTxt: string;
  id: string;
}

const NextBtn: React.FC<NextBtnProps> = ({ NextTxt, id }) => {
  return (
    <button
      form={id}
      type="submit"
      className=" bg-black px-5 py-3 text-lg max-sm:text-base rounded-full text-white font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-1 text-nowrap dark:bg-accent dark:text-black "
    >
      Next : {NextTxt} <IoIosArrowForward className=" mt-1" />
    </button>
  );
};

export default NextBtn;
