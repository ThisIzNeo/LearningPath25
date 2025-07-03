import React from "react";
import { IoImageOutline } from "react-icons/io5";


export const DropZone = () => {
  return (
    <div class="flex items-center justify-center w-full">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center h-64 w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-100 transition duration-300"
      >
        <div className="flex flex-col justify-center items-center absolute text-gray-500">
        <IoImageOutline />
        Click to Create
        </div>
            <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
};
