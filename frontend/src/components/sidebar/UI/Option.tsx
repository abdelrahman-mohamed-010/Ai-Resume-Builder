import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface OptionProps {
  Icon: React.ElementType;
  title: string;
  open: boolean;
  notifs?: number;
  path: string;
}

const Option: React.FC<OptionProps> = ({ Icon, title, path, open, notifs }) => {
  return (
    <motion.div layout>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `relative flex h-10 w-full items-center rounded-md transition-colors ${
            isActive
              ? "bg-indigo-100 text-primary-text dark:bg-indigo-600 dark:text-white"
              : "text-secondary-text hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-gray-700"
          }`
        }
      >
        <motion.div
          layout
          className="grid h-full w-10 place-content-center text-lg relative group"
        >
          <Icon />
          {!open && (
            <span className="absolute font-semibold bg-neutral-200  bg-opacity-100 rounded py-1 px-2 text-sm left-11 top-6 hidden group-hover:block text-nowrap font-sans text-gray-600 -z-50">
              {title}
            </span>
          )}
        </motion.div>

        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            {title}
          </motion.span>
        )}

        {notifs && open && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ y: "-50%" }}
            transition={{ delay: 0.5 }}
            className="absolute w-4 right-2 top-1/2 rounded bg-primary text-xs text-white text-center"
          >
            {notifs}
          </motion.span>
        )}
      </NavLink>
    </motion.div>
  );
};

export default Option;
