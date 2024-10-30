interface TitleSectionProps {
  open: boolean;
}
import { motion } from "framer-motion";
import Logo from "./Logo";
;

const TitleSection: React.FC<TitleSectionProps> = ({ open }) => {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex  items-center justify-between rounded-md transition-colors text-primary-text dark:text-white">
        <div className="flex items-center gap-3">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xl font-bold">ResumeGenie</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
export default TitleSection;
