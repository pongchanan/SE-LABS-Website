import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editAction } from "../../../store/edit-slice";
import { createPortal } from "react-dom";

export default function Modal({ children, className = "" }) {
  const dispatch = useDispatch();

  // Use selector to access modal state from the Redux store
  const isOpen = useSelector((state) => {
    // console.log("Redux state:", state);
    return state.edit.isOpen;
  });

  useEffect(() => {
    const modal = document.getElementById("modalDialog");

    if (isOpen) {
      modal.showModal(); // Show the modal if isOpen is true
    } else {
      modal.close(); // Close the modal if isOpen is false
    }

    return () => modal && modal.close();
  }, [isOpen]);

  return createPortal(
    <dialog
      id="modalDialog"
      className="relative w-full  bg-white p-6 rounded-lg max-h-[90vh] max-w-[45vw]  overflow-y-auto "
      onClose={() => dispatch(editAction.closeModal())}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
