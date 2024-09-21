import React from "react";
import NewsCard from "./News-Card";

const newsItems = [
  {
    image: "https://picsum.photos/300/200",

    title: "Blog title heading will go here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    author: "AI Laboratory",
    date: "11 Jan 2022",
  },
  // Repeat the above object 3 more times for the other news items
];

function RecentNews() {
  return (
    <section className="flex overflow-hidden flex-col px-16 py-28 w-full bg-sky-100 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-end w-full max-md:max-w-full">
        <div className="flex flex-col text-black min-w-[240px] w-[768px] max-md:max-w-full">
          <h2 className="text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
            Latest News
          </h2>
          <p className="mt-6 text-lg max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <button className="flex flex-col text-base text-black w-[104px]">
          <span className="gap-2 self-stretch px-6 py-3 max-w-full bg-white rounded-xl border border-black border-solid w-[104px] max-md:px-5">
            View all
          </span>
        </button>
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="box-border flex relative flex-col shrink-0">
          <div className="flex gap-8 items-start w-full max-md:max-w-full">
            {newsItems.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      {/* Pagination and navigation controls */}
    </section>
  );
}

export default RecentNews;
