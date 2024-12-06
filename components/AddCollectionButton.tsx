import React from "react";

function AddCollectionButton() {
  return (
    <div className="w-full rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px]">
      <button className="dark:text-white w-full rounded-lg dark:bg-neutral-950 bg-white hover:shadow-[0_0_5px_3px_rgba(255,85,51,0.3),0_0_20px_5px_rgba(255,136,0,0.2)] transition-shadow duration-300">
        <h3 className=" text-xl bg-gradient-to-r font-bold from-red-500 to-orange-500 hover:from-orange-500 hover:to-red-600 bg-clip-text text-transparent my-2">
          Create collection
        </h3>
      </button>
    </div>
  );
}

export default AddCollectionButton;
