import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updateLayout } from "../../redux/coverLetterSlice";

const LayoutOption = () => {
  const dispatch = useAppDispatch();

  const layoutStyle = useAppSelector((state) => state.coverLetter.layout);

  const handleLayoutStyle = (layout: string) => {
    dispatch(updateLayout(layout));
  };

  return (
    <>
      <p className="text-sm 3xl:text-base">Layout</p>
      <div className="flex gap-4 my-3 3xl:gap-6">
        {["Condensed", "Standard", "Expanded"].map((layout) => (
          <button
            key={layout}
            type="button"
            className={`px-4 py-2 font-semibold border-2 rounded-full mb-2 transition-all hover:border-indigo-800 hover:text-indigo-800 3xl:px-6 3xl:py-3 ${
              layout === layoutStyle
                ? "text-indigo-800 border-indigo-800"
                : "text-primary border-primary"
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
