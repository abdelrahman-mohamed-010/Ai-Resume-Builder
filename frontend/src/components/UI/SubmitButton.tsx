import { motion } from "framer-motion";


interface SubmitButtonProps {
  isSubmitting?: boolean;
  buttonText: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting = false,
  buttonText,
}) => {
  return (
    <motion.button
      className={`font-semibold w-[48%] max-sm:w-full px-4 py-3 bg-primary dark:bg-accent text-white rounded-lg hover:bg-primary-dark dark:hover:bg-accent-dark text-sm md:text-base flex items-center justify-center border-white ${
        isSubmitting ? " cursor-not-allowed" : ""
      }`}
      whileHover={{ scale: 1.05 }}
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="w-5 h-5 border-2 border-t-transparent animate-spin rounded-full mr-2"></span>
          Processing...
        </>
      ) : (
        buttonText
      )}
    </motion.button>
  );
};

export default SubmitButton;
