import React from "react";
import EventCard from "../../Cards/Event-Card";
import { useInfiniteFetch } from "api/custom-hooks";

const RecentEvents = ({
  toFetchedData = {},
  topic = "events",
  filter = null,
  ComponentTitle = "EventComp",
}) => {
  const recentEventsQuery = useInfiniteFetch({
    id: toFetchedData.id,
    url: toFetchedData.url,
    pageSize: toFetchedData.pageSize,
    filter,
  });

  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    recentEventsQuery;

  const hasData =
    data && data.pages && data.pages.some((page) => page?.length > 0);

  return (
    <section className="flex overflow-hidden flex-col px-16 pt-8 w-full bg-gray-100 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col w-full text-black max-md:max-w-full">
        <h2 className="text-5xl leading-tight max-md:max-w-full max-md:text-4xl">
          {ComponentTitle}{" "}
        </h2>
      </div>
      <div className="flex flex-col mt-10 w-full max-md:mt-10 max-md:max-w-full">
        {!isLoading && hasData ? (
          data.pages.map((itemArr, pageIndex) =>
            itemArr.map((item, itemIndex) => (
              <EventCard
                key={`${pageIndex}-${itemIndex}`}
                {...item.Event} // Corrected property access
                fullData={item.Event}
              />
            ))
          )
        ) : isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="text-center text-lg text-gray-500">
            No events available at the moment.
          </div>
        )}
        {!isError && hasData && (
          <button
            onClick={() => {
              console.log("clicked");
              fetchNextPage();
            }}
            disabled={isFetchingNextPage}
            className="px-8 py-5 mt-8 w-full text-lg bg-blue-500 text-white border rounded-2xl border-solid max-md:px-5 max-md:max-w-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default RecentEvents;
