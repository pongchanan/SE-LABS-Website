import React from "react";
import HeroBox from "../../component/others/Hero/Hero-box";
import RecentNews from "../../component/News/Recent-News/Recent-News";
import RecentEvents from "../../component/Events/Recent-Events/Recent-Events";
import { useLocation } from "react-router-dom";
import AboutDescription from "../../component/Description/About-Description/About-Description";
import TopicAndImage from "../../component/others/Big-Image/Topic-And-Image";
import { eventItems, labData, newsItems } from "../../PlaceHolder-Data/data";
import TopicHeaderText from "../../component/Topic-Header";
import GridCards from "../../component/Grid/Card-Grid";
import DividingRows from "../../component/admin-Component/tables/proto1/table";
import Modals from "../../component/admin-Component/Modal/Modal";
function MainPages() {
  const location = useLocation();
  switch (location.pathname) {
    case "/":
      return (
        <>
          <HeroBox />
          <DividingRows />
          <RecentNews rowData={newsItems} />
          <RecentEvents listData={eventItems} />
          <Modals />
        </>
      );
    case "/about":
      return (
        <>
          <TopicAndImage />
          <AboutDescription />
          <RecentNews rowData={newsItems} />
          <RecentEvents listData={eventItems} />
        </>
      );
    case "/events":
      return (
        <>
          <TopicHeaderText topic="Events" />
          <GridCards rowData={newsItems} />
        </>
      );
    case "/news":
      return (
        <>
          <TopicHeaderText topic="News" />
          <GridCards rowData={newsItems} />
        </>
      );
    case "/publications":
      return (
        <>
          <TopicHeaderText topic="Publications" />
          <GridCards rowData={newsItems} />
        </>
      );
    case "/research":
      return (
        <>
          <TopicHeaderText topic="Research" />
          <GridCards rowData={newsItems} />
        </>
      );
    case "/labs":
      return (
        <>
          <TopicHeaderText topic="Labs" />
          <GridCards rowData={newsItems} />
        </>
      );
    default:
      <></>;
  }
  // { index: true, element: <MainPages /> },
  // { path: "about", element: <MainPages /> },
  // { path: "events", element: <MainPages /> },
  // { path: "labs", element: <MainPages /> },
  // { path: "news", element: <MainPages /> },
  // { path: "publications", element: <MainPages /> },
  // { path: "research", element: <MainPages /> },
  // { path: "events", element: <MainPages /> },
  // { path: "people", element: <MainPages /> },
  // { path: "labs/:labID", element: <DynamicLabPage /> },
}
export default MainPages;
