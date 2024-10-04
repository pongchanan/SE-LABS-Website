import React, { useState } from "react";
import {
  //   useQueryClient,
  useMutation,
  useQuery,
  useQueries,
} from "@tanstack/react-query";
import { getData } from "../../../api/api-method";
// const fetchUrl = async (url) => {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// };
async function parallelData(urlArr) {
  //map [{url,id},{}] to {id:{data},id:{data}}
  //using getData each of the obejects in array
  //and using useQueries
}
export const DataFetcherQueue = (template) => {
  const [fetchQueue, setFetchQueue] = useState([
    //[{url,id},{}]
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ]);
  const [fetchedData, setFetchedData] = useState([]);

  const mutation = useMutation(parallelData, {
    onSuccess: (data) => {
      setFetchedData((prevData) => [...prevData, data]);
      // Remove the first item from the queue
      setFetchQueue((prevQueue) => prevQueue.slice(1));
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
    onSettled: () => {
      // Automatically fetch the next item in the queue if there are more
      if (fetchQueue.length > 0) {
        mutation.mutate(fetchQueue[0]);
      }
    },
  });

  const startFetching = () => {
    if (fetchQueue.length > 0) {
      mutation.mutate(fetchQueue[0]); // Start fetching the first item
    }
  };

  return (
    <div>
      <h1>Data Fetcher Queue</h1>
      <button
        onClick={startFetching}
        disabled={mutation.isLoading || fetchQueue.length === 0}
      >
        Start Fetching
      </button>
      {mutation.isLoading && <p>Loading...</p>}
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
      <div>
        <h2>Fetched Data</h2>
        <pre>{JSON.stringify(fetchedData, null, 2)}</pre>
      </div>
    </div>
  );
};

//////////////////check if all queries are done (parallel queries)
////////////////////////////////////////////////////////////////

// import { useQueries } from '@tanstack/react-query';

// const fetchPost = async (postId) => {
//   const response = await fetch(`/api/posts/${postId}`);
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

// const YourComponent = () => {
//   const postIds = [1, 2, 3]; // Example post IDs

//   const results = useQueries({
//     queries: postIds.map(postId => ({
//       queryKey: ['post', postId],
//       queryFn: () => fetchPost(postId),
//     })),
//   });

//   // Check if all queries are done
//   const allQueriesDone = results.every(result => result.isSuccess);

//   return (
//     <div>
//       {allQueriesDone ? (
//         results.map(result => <div key={result.data.id}>{result.data.title}</div>)
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };
