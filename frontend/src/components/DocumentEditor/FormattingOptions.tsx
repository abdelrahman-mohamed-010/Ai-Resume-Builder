import ColorOptions from "./ColorOptions";
import FontOptions from "./FontOptions";
import LayoutOption from "./LayoutOption";

const FormattingOptions = () => {
  return (
    <>
      <div className="font-semibold text-sm mb-4 3xl:text-base mt-6 dark:text-accent">
        Formatting Options
      </div>
      <LayoutOption />
      <FontOptions />
      <ColorOptions />
    </>
  );
};

export default FormattingOptions;
