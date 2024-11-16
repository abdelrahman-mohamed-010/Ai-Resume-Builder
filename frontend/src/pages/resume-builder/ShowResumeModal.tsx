import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import ResumeShowCase from "./ResumeShowCase";

interface DownloadModalProps {
  onClose: () => void;
}

const ShowResume: React.FC<DownloadModalProps> = ({ onClose }) => {
  return (
    <motion.div
      className="bg-white shadow-lg h-screen overflow-y-scroll pt-8 relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <IoClose
        className=" absolute top-4 right-4 font-semibold w-6 h-6 cursor-pointer"
        onClick={onClose}
      />
      <ResumeShowCase className="max-w-4xl mx-auto px-8 py-4 shadow-lg rounded-lg" />
    </motion.div>
  );
};

export default ShowResume;
