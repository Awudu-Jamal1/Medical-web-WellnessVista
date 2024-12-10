const team = [
  {
    name: "Christina Robbin",
    role: "Finance Manager",
    img: "https://lifeline.wpcharity.com/wp-content/uploads/2020/12/team1-2.jpg",
  },
  {
    name: "Christina Robbin",
    role: "Finance Manager",
    img: "https://lifeline.wpcharity.com/wp-content/uploads/2020/12/team1-2.jpg",
  },
  {
    name: "Christina Robbin",
    role: "Finance Manager",
    img: "https://lifeline.wpcharity.com/wp-content/uploads/2020/12/team1-2.jpg",
  },
];

import groupWork from "../../assets/img/group.jpg"
import ProgressBar from "./progressBar";

function MeetTeam() {
  return (
    <>
      {/* <div className=" flex bg-backgroundColor3 flex-col justify-center lg:px-32 px-5 py-12 lg:pt-5 lg:pb-24">
        <div >
            <h1 className="text-5xl font-bold text-center py-10">Meet Our Team</h1>
            <div className="flex flex-col lg:flex-row gap-14">
                
                {team.map((e,id)=>(<div className="shadow-xl" key={id}>
                    <div><img src={e.img} alt="" /></div>
                    <div className="bg-white pt-2 pb-6 px-8">
                        <p className="text-2xl py-1 font-bold">
                        {e.name}
                        </p>
                        <p className="text-sm text-brightColor">
                            {e.role}
                        </p>
                    </div>
                </div>))}
                </div>
                </div></div> */}
      <div className="grid lg:grid-cols-2  ">
        <div>
            <img src="https://show.moxcreative.com/techit/wp-content/uploads/sites/19/2021/11/green-business-team-1536x1062.jpg" className="h-full w-full" alt="" />
        </div>
        <div className="bg-[#f7f7f7] py-32  text-left px-20">
          <h6 className="text-sm  text-backgroundColor uppercase tracking-wider font-bold py-2 ">
            Professional Team
          </h6>
          <h1 className="text-4xl capitalize font-bold pb-2 tracking-wide">
            Why we different
          </h1>
          <p className="font-semibold text-gray-600 text-md py-2 pb-10">
          Murphy eHealth stands out with a dedicated team combining expertise in healthcare, technology, and innovation, offering tailored, user-centric solutions for improved health outcomes and seamless digital experiences.</p>
          <div>
            <ProgressBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetTeam;
