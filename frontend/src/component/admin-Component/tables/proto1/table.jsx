import React from "react";
import RowBlock from "./row";

const DividingRows = () => {
  const rowData = [
    { id: 1, backgroundColor: "bg-neutral-500" },
    { id: 2, backgroundColor: "bg-neutral-500" },
    { id: 3, backgroundColor: "bg-neutral-500" },
  ];

  return (
    <main className="flex flex-col max-w-[803px]">
      <header className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
        <div className="flex flex-col">
          <h1 className="self-start text-lg font-medium text-neutral-700">
            Dividing rows into separate blocks
          </h1>
          <div className="flex gap-5 justify-between self-end mt-11 max-w-full w-[317px] max-md:mt-10">
            <div className="flex shrink-0 bg-gray-200 h-[13px] w-[98px]" />
            <div className="flex shrink-0 bg-gray-200 h-[13px] w-[98px]" />
          </div>
        </div>
        <div className="flex shrink-0 self-end mt-16 bg-gray-200 h-[13px] w-[98px] max-md:mt-10" />
        <div className="flex gap-1.5 items-start text-lg whitespace-nowrap text-zinc-500">
          <div className="flex shrink-0 self-end mt-16 bg-gray-200 h-[13px] w-[98px] max-md:mt-10" />
          <div className="self-start">16</div>
        </div>
      </header>
      <section>
        {rowData.map((row) => (
          <RowBlock key={row.id} backgroundColor={row.backgroundColor} />
        ))}
      </section>
    </main>
  );
};

export default DividingRows;
