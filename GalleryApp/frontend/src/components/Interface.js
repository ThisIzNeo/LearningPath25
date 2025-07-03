import React from "react";
import { IoEnterOutline } from "react-icons/io5";

export const Interface = () => {
  return (
    <div className="flex justify-between p-16">
      <div>
        <h1 className="text-4xl font-bold text-gray-600">Gallaxter</h1>
        <p className="text-gray-300 mt-3">
          Don't forget to delete your pictures.
        </p>
      </div>
      <div className="space-y-3">
        <p className="text-gray-500 mt-3">Start the repository</p>
        <a href="https://github.com/ThisIzNeo/LearningPath25" className="flex items-center p-3 bg-blue-500 space-x-5 text-white rounded-md">
          <IoEnterOutline />
           <p>Github</p>
        </a>
      </div>
    </div>
  );
};
