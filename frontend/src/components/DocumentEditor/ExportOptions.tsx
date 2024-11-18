import Modal from "../UI/Modal";
import DownloadModal from "../UI/DownloadModal";
import { useState } from "react";

const ExportOptions: React.FC<{ type: string }> = ({ type }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal open={showModal}>
          <DownloadModal onClose={() => setShowModal(false)} />
        </Modal>
      )}

      <div className="font-semibold text-sm mb-5 3xl:text-base dark:text-accent">
        Export Options
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="block w-full rounded-3xl bg-black font-bold text-white p-3 mb-3 hover:bg-primary transition-all 3xl:p-4 dark:bg-primary dark:hover:bg-indigo-700"
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
      {type === "Resume" && (
        <button className="block w-full rounded-3xl border-2 text-primary font-bold border-primary p-3 transition-all hover:border-indigo-800 hover:text-indigo-800 3xl:p-4">
          Save
        </button>
      )}
    </>
  );
};

export default ExportOptions;
