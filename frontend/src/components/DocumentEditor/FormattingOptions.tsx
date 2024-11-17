import ColorOptions from "./ColorOptions";
import FontOptions from "./FontOptions";
import LayoutOption from "./LayoutOption";

const FormattingOptions: React.FC<{ type: string }> = ({ type }) => {
  return (
    <>
      <div className="font-semibold text-sm mb-4 3xl:text-base mt-6 dark:text-accent">
        Formatting Options
      </div>
      <LayoutOption type={type} />
      <FontOptions type={type} />
      <ColorOptions type={type} />
    </>
  );
};

export default FormattingOptions;
