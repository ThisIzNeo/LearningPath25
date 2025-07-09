import React, { useState } from "react";
import { IoImageOutline, IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

export const DropZone = () => {
  const [postData, setPostData] = useState({ selectedFile: "", title: "" });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
    await dispatch(createPost(postData));
    setIsSubmitting(false); 
    setShowModal(false);
    setPostData({ selectedFile: "", title: "" });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const base64 = await convertToBase64(file);
    setPostData({ ...postData, selectedFile: base64 });
  };

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <>
      {/* Trigger Area */}
      <div className="flex items-center justify-center w-full">
        <div
          onClick={() => setShowModal(true)}
          className="flex flex-col items-center justify-center h-64 w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-300 relative"
        >
          <div className="flex flex-col justify-center items-center text-gray-500">
            <IoImageOutline className="text-3xl mb-2" />
            <span>Click to Create</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <IoClose className="text-2xl" />
            </button>

            <h2 className="text-xl font-semibold mb-4">Select Picture</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={postData.title}
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
                className="block p-3 w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block p-3 w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              />
              {postData.selectedFile && (
                <img
                  src={postData.selectedFile}
                  alt="Preview"
                  className="w-96 h-64 object-cover rounded-lg shadow"
                />
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${
                  isSubmitting
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white py-2 px-4 rounded-md transition flex justify-center`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Uploading...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
