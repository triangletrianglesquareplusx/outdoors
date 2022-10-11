import React from "react";

export const SearchField = () => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        className="py-6 px-4 outline-none border-gray rounded-xl border-2 min-w-[50%]"
        placeholder="search here, please"
      />
    </div>
  );
};
