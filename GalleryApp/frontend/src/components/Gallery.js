import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DropZone } from "./DropZone";
import { getPosts, deletePost } from "../actions/posts";
import moment from "moment";

import { FaHeart } from "react-icons/fa";
import { FaTrashCanArrowUp } from "react-icons/fa6";

export const Gallery = () => {
  const dispatch = useDispatch();
  const { data: posts, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-gray-400 text-xl animate-pulse">
          Loading posts...
        </div>
      </div>
    );
  }

  return !posts.length ? (
    <p className="p-12">
      No Pictures:{" "}
      <div className="p-12 w-96 h-96">
        <DropZone />
      </div>
    </p>
  ) : (
    <div className="px-16">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-3 h-3 bg-orange-300 rounded-full" />
        <h1 className="text-2xl font-semibold text-gray-500">Memories</h1>
      </div>

      <div className="grid py-5  grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div>
            <p className="absolute text-gray-200 opacity-0 hover:opacity-100 p-3">
              {moment(post.createdAt).fromNow()}
            </p>
            <img
              key={post._id}
              src={post.selectedFile}
              alt={`Memory ${post.title}`}
              className="w-96 h-64 object-cover rounded-lg shadow-md hover:rounded-2xl duration-300"
            />
            <div className="flex justify-between">
              <button className="flex mt-3 space-x-2 items-center p-2 rounded-md bg-red-400 hover:bg-red-500 duration-300 text-white">
                <FaHeart />
                <p className=""> {post.likeCount}</p>
              </button>
              <button
                onClick={() => {
                  console.log("Deleting:", post._id); // log this
                  dispatch(deletePost(post._id));
                }}
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
