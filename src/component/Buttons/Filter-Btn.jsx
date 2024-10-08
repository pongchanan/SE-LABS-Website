import React from "react";
import dropdown from "../../resource/drop-down-filter.svg";
function FilterButton() {
  return (
    <button className="flex gap-2 justify-center items-center self-stretch px-4 py-2 my-auto bg-white border border-black border-solid rounded-[34px]">
      <span className="self-stretch my-auto">Filter by Lab</span>
      <img
        loading="lazy"
        src={dropdown}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
    </button>
  );
}

export default FilterButton;
