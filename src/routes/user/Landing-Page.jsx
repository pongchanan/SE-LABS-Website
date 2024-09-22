import React from "react";
import { Fragment } from "react";
import HeroBox from "../../component/others/Hero/Hero-box";
import RecentNews from "../../component/News/Recent-News/Recent-News";
import RecentEvents from "../../component/Events/Recent-Events/Recent-Events";
import { eventItems, newsItems } from "../../PlaceHolder-Data/data";

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
