import React, { useState } from "react";
import dropdown from "../../../../resource/drop-down-filter.svg";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Filter by Lab");

  const options = ["Lab 1", "Lab 2", "Lab 3", "Lab 4"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex gap-2 justify-center items-center self-stretch px-4 py-2 my-auto bg-white border border-black border-solid rounded-[34px]"
      >
        <span className="self-stretch my-auto">{selectedOption}</span>
        <img
          loading="lazy"
          src={dropdown}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-black rounded-lg shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDown;
