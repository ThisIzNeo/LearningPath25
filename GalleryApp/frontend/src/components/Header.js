import React from "react";
import { IoIosSearch } from "react-icons/io";

export const Header = () => {
  return (
    <div className="flex justify-between items-center max-sm:flex-col max-sm:space-y-5 w-full px-10 mt-5">
      <div className="flex items-center text-2xl h-12 sm:w-64 bg-gray-200 rounded-lg w-96">
        <div className="text-gray-500 ml-3">
          <IoIosSearch />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="p-3 w-full rounded-lg bg-gray-200 text-gray-700 text-base focus:outline-0"
        />
      </div>
      <div className="flex space-x-3 items-center h-12">
        <img
          src="https://tr.rbxcdn.com/180DAY-d2aa8b558f4c73dc77ab184210a56788/420/420/Hat/Webp/noFilter"
          className="w-12 rounded-full"
        />
        <p className="text-gray-600 font-semibold text-lg">ThisIzNeo</p>
      </div>
    </div>
  );
};
