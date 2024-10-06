// async function parallelData(urlArr) {
//   //map [{url,id},{}] to {id:{data},id:{data}}
//   //using getData each of the obejects in array
//   //and using useQueries

//   const results = await useQueries({
//     queries: urlArr.map((postId) => ({
//       queryKey: ["post", postId],
//       queryFn: () => getData(postId),
//     })),
//   });
// }
