import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, deletePost, likePost } from "../actions/posts";
import { FaHeart } from "react-icons/fa";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { DropZone } from "./DropZone";
import moment from "moment";

export const Gallery = () => {
  const dispatch = useDispatch();
  const { data: posts, isLoading } = useSelector((state) => state.posts);
  const [loadingLikeId, setLoadingLikeId] = useState(null); // ✅ state for tracking like loading

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleLike = async (id) => {
    setLoadingLikeId(id); // Start loading for this post
    await dispatch(likePost(id));
    setLoadingLikeId(null); // Stop loading
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-gray-400 text-xl animate-pulse">Loading posts...</div>
      </div>
    );
  }

  return !posts.length ? (
    <p className="p-12">No Pictures</p>
  ) : (
    <div className="px-16">
      <div className="grid py-5 grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div key={post._id} className="relative">
            <p className="absolute text-gray-200 bg-black bg-opacity-35 opacity-0 rounded-md  hover:opacity-100 p-1 mt-3 ml-3">
              {moment(post.createdAt).fromNow()}
            </p>
            <img
              src={post.selectedFile}
              alt={`Memory ${post.title}`}
              className="w-96 h-64 object-cover rounded-lg shadow-md hover:rounded-2xl duration-300"
            />
            <div className="flex justify-between">
              <button
                onClick={() => handleLike(post._id)}
                disabled={loadingLikeId === post._id}
                className={`flex mt-3 space-x-2 items-center p-2 rounded-md ${
                  loadingLikeId === post._id
                    ? "bg-red-300 cursor-not-allowed"
                    : "bg-red-400 hover:bg-red-500"
                } duration-300 text-white`}
              >
                {loadingLikeId === post._id ? (
                  <>
                    <div className="w-6 h-6 p-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </>
                ) : (
                  <>
                    <FaHeart />
                    <p>{post.likeCount}</p>
                  </>
                )}
              </button>

              <button
                onClick={() => dispatch(deletePost(post._id))}
                className="flex mt-3 space-x-2 items-center p-2 rounded-md bg-gray-300 hover:bg-red-500 duration-300 text-white"
              >
                <FaTrashCanArrowUp />
              </button>
            </div>
          </div>
        ))}
        <div>
          <DropZone />
        </div>
      </div>
    </div>
  );
};
