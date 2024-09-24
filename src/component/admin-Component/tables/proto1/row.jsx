import React from "react";

const RowBlock = ({ backgroundColor }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between p-5 mt-3.5 bg-white border border-solid border-zinc-300 shadow-[0px_4px_10px_rgba(0,0,0,0.15)] max-md:mr-1 max-md:max-w-full">
      <div className={`flex shrink-0 h-6 ${backgroundColor} w-[98px]`} />
      <div className="flex shrink-0 h-6 bg-zinc-300 w-[98px]" />
      <div className="flex shrink-0 h-6 bg-zinc-300 w-[98px]" />
      <div className="flex shrink-0 h-6 bg-zinc-300 w-[98px]" />
    </div>
  );
};

export default RowBlock;
