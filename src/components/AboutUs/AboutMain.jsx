import About from "./About";
import OurCulture from "./culture";
import CeoFounder from "./founder";
import MeetTeam from "./team";
import TopPart from "./topPart";

function AboutMain() {
  return (
    <>
      <div className=" ">
      <div>
        <TopPart/>
      </div>
        <div className="">
            
          <About />
        </div>
        <div><OurCulture/></div>
        <div><MeetTeam/></div>
        <div><CeoFounder/></div>
      </div>
    </>
  );
}

export default AboutMain;
