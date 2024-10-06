import {
  useQueries,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { getData } from "./api-method";
//   //map [{url,id},{}] to {id:{data},id:{data}}
//   //using getData each of the obejects in array
//   //and using useQueries
export const useParallelData = (urlArr) => {
  const results = useQueries(
    urlArr.map((obj) => ({
      queryKey: ["get", obj.id],
      queryFn: () => getData(obj.url),
      onSuccess: (data) => {
        return data;
      },
      //   onSettled:
    }))
  );

  return results;
};
