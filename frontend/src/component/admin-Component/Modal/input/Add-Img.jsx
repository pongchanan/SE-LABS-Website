// import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editAction } from "../../../../store/edit-slice";
const ImageUploader = ({ register, name, setValue }) => {
  //   const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const selectedImage = useSelector((state) => {
    // console.log("Redux state:", state);
    return state.edit.selectedImage;
  });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(editAction.setImage(URL.createObjectURL(file)));
      setValue(name, file); // Use setValue to update form data
    }
  };

  return (
    <div className="flex flex-col items-center mt-6">
      {/* Image input */}
      <input
        type="file"
        accept="image/*"
        {...register(name, { required: true })}
        onChange={handleImageChange}
        className="block  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 w-[350px]"
      />

      {/* Image preview */}
      {selectedImage && (
        <div className="mt-4">
          <img
            src={selectedImage}
            alt="Selected Preview"
            className="max-w-[300px] max-h-[300px] rounded-lg shadow-lg object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
