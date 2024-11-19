import { motion } from "framer-motion";
import { FiChevronsRight } from "react-icons/fi";

interface ToggleCloseProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ToggleClose: React.FC<ToggleCloseProps> = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen(!open)}
      className={`absolute bottom-0 left-0 right-0 max-sm:z-50 max-sm:fixed  max-sm:bg-slate-300  border-t  border-slate-300 transition-colors md:hover:bg-slate-100 dark:md:hover:bg-gray-700 dark:text-white ${
        open
          ? " max-sm:bg-white max-sm:dark:bg-dark-background max-sm:w-[225px] border-r border-slate-300"
          : "max-sm:max-w-14 max-sm:max-h-14 max-sm:bg-gray-100 max-sm:dark:bg-slate-950 max-sm:border-2 max-sm:border-r-2 max-sm:border-slate-400 max-sm:dark:border-2 max-sm:rounded-full max-sm:bottom-3 max-sm:left-3"
      }`}
    >
      <div className="flex items-center p-2 max-sm:justify-center">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <FiChevronsRight
            className={`transition-transform ${open && "rotate-180"} ${!open && " max-sm:mb-0.5"}`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

export default ToggleClose;
