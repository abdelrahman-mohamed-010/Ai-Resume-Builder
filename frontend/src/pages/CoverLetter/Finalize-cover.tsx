import CoverLetterPreview from "../../components/CoverLetterPreview/CoverLetterPreview";
import DocumentEditor from "../../components/DocumentEditor/DocumentEditor";

const Finalize_cover = () => {
  return (
    <div className=" flex justify-between max-lg:flex-col items-center border-b border-slate-300 ">
      <section className="w-full flex justify-center">
        <CoverLetterPreview />
      </section>
      <DocumentEditor type="Cover Letter" />
    </div>
  );
};

export default Finalize_cover;
