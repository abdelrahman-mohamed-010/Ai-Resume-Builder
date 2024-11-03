import { useAppSelector } from "../../hooks/reduxHooks";

const ExportOptions: React.FC<{ type: string }> = ({ type }) => {
  const user = useAppSelector((state) => state.coverLetter);

  return (
    <>
      <div className="font-semibold text-sm mb-5 3xl:text-base">
        Export Options
      </div>
      <button
        className="block w-full rounded-3xl bg-black font-bold text-white p-3 mb-3 hover:bg-primary transition-all 3xl:p-4"
        onClick={() => {
          console.log(user);
        }}
      >
        Download
      </button>
      <button className="block w-full rounded-3xl border-2 text-primary font-bold border-primary p-3 mb-3 transition-all hover:border-indigo-800 hover:text-indigo-800 3xl:p-4">
        Print
      </button>
      {type === "Cover Letter" && (
        <button className="block w-full rounded-3xl border-2 text-primary font-bold border-primary p-3 transition-all hover:border-indigo-800 hover:text-indigo-800 3xl:p-4">
          Email
        </button>
      )}
    </>
  );
};

export default ExportOptions;
