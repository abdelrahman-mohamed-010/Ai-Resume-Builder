import ExportOptions from "./ExportOptions";
import FormattingOptions from "./FormattingOptions";
import { motion } from "framer-motion";

interface DocumentEditorProps {
  type: string;
}

const DocumentEditor: React.FC<DocumentEditorProps> = ({ type }) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="  w-[460px] lg:w-[600px] 3xl:w-[800px] border-l border-slate-300 px-10 pb-6 lg:min-h-screen h-full"
    >
      <h1 className="text-center mt-8 mb-2 text-2xl font-bold 3xl:text-3xl dark:text-white ">
        Your {type} Awaits!
      </h1>
      <p className="text-center mb-10 3xl:text-lg dark:text-slate-400">
        Ready to take the next step?
      </p>
      <ExportOptions type={type} />
      <FormattingOptions />
    </motion.section>
  );
};

export default DocumentEditor;
