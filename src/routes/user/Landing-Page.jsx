import React from "react";
import { Fragment } from "react";
import HeroBox from "../../component/others/Hero/Hero-box";
import RecentNews from "../../component/News/Recent-News/Recent-News";
import RecentEvents from "../../component/Events/Recent-Events/Recent-Events";

function LandingPage() {
  return (
    <>
      <HeroBox />
      <RecentNews newsItems={newsItems} />
      <RecentEvents eventItems={eventItems} />
    </>
  );
}
export default LandingPage;

const newsItems = [
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

const eventItems = [
  {
    title: "Job Title",
    status: "ON GOING",
    statusClass: "bg-green-500",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    location: "Location",
    duration: "Duration",
  },
  {
    title: "Job Title",
    status: "COMING",
    statusClass: "bg-yellow-200",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    location: "Location",
    duration: "Duration",
  },
  {
    title: "Job Title",
    status: "FINISHED",
    statusClass: "bg-neutral-300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    location: "Location",
    duration: "Duration",
  },
];
