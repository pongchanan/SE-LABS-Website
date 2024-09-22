import Description from "../../component/Description/Description";
import TopicAndImage from "../../component/others/Big-Image/Topic-And-Image";
import RecentResearch from "../../component/Research/Recent-Research";
import OurTeam from "../../component/Team/Our-Team";
function DynamicLabPage() {
  return (
    <>
      <TopicAndImage />
      <Description />
      <OurTeam teamMembers={teamMembers} />
      <RecentResearch researchItems={researchItems} />
    </>
  );
}
export default DynamicLabPage;

//fetch lab info, fetch image, then fetch projects etc...
const teamMembers = [
  {
    name: "DR. Somchai Matmaitre",
    email: "somchaimatmaitre@gmail.com",
    image: "https://picsum.photos/300/200",
  },
  {
    name: "Blog title heading will go here",
    email: "gmail",
    image: "https://picsum.photos/300/200",
  },
  {
    name: "Blog title heading will go here",
    email: "gmail",
    image: "https://picsum.photos/300/200",
  },
  {
    name: "Blog title heading will go here",
    email: "gmail",
    image: "https://picsum.photos/300/200",
  },
];

const researchItems = [
  {
    image: "https://picsum.photos/300/200",

    title: "Blog title heading will go here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    author: "AI Laboratory",
    date: "11 Jan 2022",
  },
  {
    image: "https://picsum.photos/300/200",

    title: "Blog title heading will go here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    author: "AI Laboratory",
    date: "11 Jan 2022",
  },
  {
    image: "https://picsum.photos/300/200",

    title: "Blog title heading will go here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    author: "AI Laboratory",
    date: "11 Jan 2022",
  },
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
