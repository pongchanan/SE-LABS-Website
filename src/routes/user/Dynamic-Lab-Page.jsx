import Description from "../../component/Description/Description";
import TopicAndImage from "../../component/others/Big-Image/Topic-And-Image";
import OurTeam from "../../component/Team/Our-Team";
function DynamicLabPage() {
  return (
    <>
      <TopicAndImage />
      <Description />
      <OurTeam />
    </>
  );
}
export default DynamicLabPage;

//fetch lab info, fetch image, then fetch projects etc...
