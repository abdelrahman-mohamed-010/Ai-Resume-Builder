import { useState } from "react";
import { FaEye } from "react-icons/fa";
import Modal from "../../components/UI/Modal";
import ShowResume from "./ShowResumeModal";

const ResumeOverview = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal open={showModal}>
          <ShowResume onClose={() => setShowModal(false)} />
        </Modal>
      )}

      <div className=" w-fit h-fit mt-16 p-4 bg-white dark:bg-neutral-200 shadow-md rounded-lg border border-gray-200 text-gray-800 text-[10px] relative overflow-hidden">
        <button
          onClick={() => setShowModal(true)}
          className="absolute z-40 bottom-12 left-1/2 transform -translate-x-1/2 rounded-full text-primary border-primary hover:text-black hover:border-black transition-all border-2 flex items-center gap-2 bg-white font-semibold text-lg py-1 px-3 cursor-pointer "
        >
          <FaEye className=" text-xl" /> Preview
        </button>

        <div className="opacity-30 pointer-events-none group-hover:opacity-40 transition-opacity">
          <div className="text-center mb-1">
            <h1 className="text-[12px] font-bold">John Doe</h1>
            <p className="text-gray-600">Frontend Developer</p>
            <p className="text-gray-500">San Francisco, CA</p>
            <p className="text-gray-500">johndoe@example.com | +123 456 7890</p>
          </div>
          <div className="mb-1">
            <h2 className="font-semibold text-gray-700">Profile Summary</h2>
            <p className="text-gray-600">
              Frontend Developer with 5+ years of experience in responsive web
              applications.
            </p>
          </div>
          {/* Experience Section */}
          <div className="mb-1">
            <h2 className="font-semibold text-gray-700">Experience</h2>

            {/* Job 1 */}
            <div className="mb-1">
              <p className="font-medium text-gray-800">Frontend Developer</p>
              <p className="text-gray-600">
                Tech Solutions Inc. | 2020 - Present
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-0.5">
                <li>Built applications with React.</li>
                <li>Improved load time by 20%.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-800">Junior Developer</p>
              <p className="text-gray-600">Web Innovators | 2017 - 2019</p>
              <ul className="list-disc list-inside text-gray-600 space-y-0.5">
                <li>Assisted in UI/UX improvements.</li>
                <li>Reduced load times by 15%.</li>
              </ul>
            </div>
          </div>
          <div className="mb-1">
            <h2 className="font-semibold text-gray-700">Education</h2>
            <p className="font-medium text-gray-800">
              B.S. in Computer Science
            </p>
            <p className="text-gray-600">University of California, 2013-2017</p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-700">Skills</h2>
            <div className="flex flex-wrap gap-1">
              <span className="bg-gray-200 text-gray-700 font-medium px-1 py-0.5 rounded">
                JavaScript
              </span>
              <span className="bg-gray-200 text-gray-700 font-medium px-1 py-0.5 rounded">
                React
              </span>
              <span className="bg-gray-200 text-gray-700 font-medium px-1 py-0.5 rounded">
                HTML & CSS
              </span>
              <span className="bg-gray-200 text-gray-700 font-medium px-1 py-0.5 rounded">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeOverview;
