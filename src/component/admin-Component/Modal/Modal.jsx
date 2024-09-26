import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editAction } from "../../../store/edit-slice";
import Modal from "./Modal-Frame";
import NewsletterSubscription from "./example-input";
import ImageUploader from "./input/Add-Img";
import DropDown from "./relate/dropdown";

const Modals = () => {
  const dispatch = useDispatch();
  // const isCreating = useSelector((state) => state.editAction.isCreate);
  return (
    <div>
      <button onClick={() => dispatch(editAction.openModal())}>
        Open Modal
      </button>

      {/* Modal will automatically open or close based on Redux state */}
      <Modal>
        <h2>This is the modal content</h2>

        <button onClick={() => dispatch(editAction.closeModal())}>
          Open Again
        </button>
        <NewsletterSubscription />
        <ImageUploader />
        <DropDown />
      </Modal>
    </div>
  );
};

export default Modals;
