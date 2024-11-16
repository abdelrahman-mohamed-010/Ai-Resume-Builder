import DocumentEditor from "@/components/DocumentEditor/DocumentEditor";
import ResumeShowCase from "./ResumeShowCase";

const ResumePreview = () => {
  return (
    <div className=" flex justify-between max-lg:flex-col items-center border-b border-slate-300 ">
      <section className="w-full flex justify-center">
        <ResumeShowCase className="md:max-w-3xl 3xl:max-w-4xl md:mx-auto px-8 py-4 shadow-lg rounded-lg border-2 md:my-12 w-full" />
      </section>
      <DocumentEditor type="Resume" />
    </div>
  );
};

export default ResumePreview;
