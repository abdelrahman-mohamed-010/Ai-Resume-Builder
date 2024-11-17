import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updateLayout } from "../../redux/coverLetterSlice";
import { updateLayout as resumeLayout } from "../../redux/ResumeSlice";

const LayoutOption: React.FC<{ type: string }> = ({ type }) => {
  const dispatch = useAppDispatch();

  const layoutStyle = useAppSelector((state) => state.coverLetter.layout);

  const handleLayoutStyle = (layout: string) => {
    if (type === "Cover Letter") {
      dispatch(updateLayout(layout));
    } else {
      dispatch(resumeLayout(layout));
    }
  };

  return (
    <>
      <p className="text-sm 3xl:text-base dark:text-accent">Layout</p>
      <div className="flex gap-4 my-3 3xl:gap-6">
        {["Condensed", "Standard", "Expanded"].map((layout) => (
          <button
            key={layout}
            type="button"
            className={`px-4 py-2 font-semibold border-2 rounded-full mb-2 transition-all hover:border-indigo-700 hover:text-indigo-700 3xl:px-6 3xl:py-3 ${
              layout === layoutStyle
                ? "text-indigo-700 border-indigo-700 dark:text-slate-400 dark:border-slate-400"
                : "text-primary border-primary "
            }`}
            onClick={() => handleLayoutStyle(layout)}
          >
            {layout}
          </button>
        ))}
      </div>
    </>
  );
};
export default LayoutOption;
