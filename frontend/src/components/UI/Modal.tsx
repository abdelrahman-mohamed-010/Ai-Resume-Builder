// import { createPortal } from "react-dom";
// import React, { useRef, useEffect } from "react";

// interface ModalProps {
//   open: boolean;
//   children: React.ReactNode;
// }

// const Modal: React.FC<ModalProps> = ({ open, children }) => {
//   const dialog = useRef<HTMLDialogElement | null>(null);

//   useEffect(() => {
//     if (open && dialog.current) {
//       dialog.current.showModal();
//     } else if (dialog.current) {
//       dialog.current.close();
//     }
//   }, [open]);

//   return createPortal(
//     <dialog
//       ref={dialog}
//       // className="modal fixed flex inset-0 items-center justify-center z-50 max-sm:items-start max-sm:pt-24"
//       className="modal fixed flex inset-0"
//     >
//       {children}
//     </dialog>,
//     document.getElementById("modal") as HTMLElement
//   );
// };

// export default Modal;

import { createPortal } from "react-dom";
import React from "react";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, children }) => {
  if (!open) return null; // Only render if open

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      {children}
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
