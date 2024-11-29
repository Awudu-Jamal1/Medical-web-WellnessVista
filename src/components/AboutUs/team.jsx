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
        <div className="bg-footer py-36 text-white text-center px-20">
          <h6 className="text-sm text-backgroundColor uppercase tracking-wider font-bold py-1 ">
            our team
          </h6>
          <h1 className="text-3xl font-bold pb-8 tracking-wide">
            Let us introduce ourselves
          </h1>
          <div className="grid lg:grid-cols-3 place-items-center text-center">
            <div className="">
              <div >
                <img
                  src="https://show.moxcreative.com/techit/wp-content/uploads/sites/19/2021/11/the-attractive-man-e1637378970560.jpg"
                  alt="" className="h-40 rounded-lg"
                />
              </div>
              <div >
                <p className="text-lg font-bold">John Frank</p>
                <p className="font-semibold text-md text-gray-400">Developer</p>
              </div>
            </div>
            <div className="">
              <div>
                <img
                  src="https://show.moxcreative.com/techit/wp-content/uploads/sites/19/2021/11/the-attractive-man-e1637378970560.jpg"
                  alt=""  className="h-40 rounded-lg"
                />
              </div>
              <div className="">
              <p className="text-lg font-bold">John Frank</p>
              <p className="font-semibold text-md text-gray-400">Developer</p>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://show.moxcreative.com/techit/wp-content/uploads/sites/19/2021/11/the-attractive-man-e1637378970560.jpg"
                  alt=""  className="h-40 rounded-lg"
                />
              </div>
              <div>
              <p className="text-lg font-bold">John Frank</p>
              <p className="font-semibold text-md text-gray-400">Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetTeam;
