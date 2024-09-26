import React from "react";
import NewsCard from "../Cards/News-Card.jsx";
import previous from "../../resource/previous-button.svg";
import next from "../../resource/next-button.svg";
import ViewAllButton from "../Buttons/View-All-Btn.jsx";
import FilterButton from "../Buttons/Filter-Btn.jsx";

let revisedData = [];
let executed = false;

function GridCards({ rowData }) {
  if (!executed) {
    for (let i = 0; i < rowData.length; i += 4) {
      revisedData.push(rowData.slice(i, i + 4));
    }
    executed = true;
  }

  return (
    <section className="flex overflow-hidden flex-col px-16 py-28 w-full bg-sky-100 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-end w-full max-md:max-w-full">
        <div className="flex flex-col text-black min-w-[240px] w-[768px] max-md:max-w-full"></div>
        <div className="flex items-center gap-4">
          <FilterButton />
          <ViewAllButton />
        </div>
      </div>
      <div className="flex flex-col mt-6 w-full max-md:mt-5 max-md:max-w-full">
        {" "}
        {/* Reduced margin-top */}
        <div className="box-border flex relative flex-col shrink-0">
          {revisedData.map((items, index) => (
            <div
              key={index}
              className="flex gap-8 items-start w-full max-md:max-w-full mt-4" // Reduced margin-top
            >
              {items.map((item, indexs) => (
                <NewsCard key={indexs} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Pagination and navigation controls */}
    </section>
  );
}

export default GridCards;
