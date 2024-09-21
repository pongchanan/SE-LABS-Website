import React from "react";
import { Fragment } from "react";
import HeroBox from "../../component/others/Hero/Hero-box";
import RecentNews from "../../component/Recent-News/Recent-News";
import RecentEvents from "../../component/Recent-Events/Recent-Events";
function LandingPage() {
  return (
    <>
      <HeroBox />
      <RecentNews />
      <RecentEvents />
    </>
  );
}
export default LandingPage;
