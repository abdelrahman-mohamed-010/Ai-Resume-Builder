import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  header: string;
  paragraph: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ header, paragraph }) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="text-indigo-800 dark:text-indigo-600 font-semibold hover:underline mb-3 flex items-center gap-2 justify-center max-md:text-sm"
      >
        <FaArrowLeft /> Go Back
      </button>
      <h1 className="font-bold text-3xl dark:text-white mb-2 max-sm:text-2xl">
        {header}
      </h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-300  max-md:text-base max-sm:text-sm">
        {paragraph}
      </p>
    </>
  );
};

export default PageHeader;
