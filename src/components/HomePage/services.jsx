import solution from "../../assets/img/itsolution.jpg";
import aiSolution from "../../assets/img/aisolution.jpg";
import consultation from "../../assets/img/consultation.jpg";
import mobileapp from "../../assets/img/mobileapp.jpg";
import telemedicine from "../../assets/img/telemedicine.jpg";
import { useNavigate } from "react-router-dom";

const product = [
  {
    content:
      "A comprehensive, integrated solution that streamlines hospital and clinic management, from patient registration to billing and reporting",
    name: "eHealth Management System (eHMS)",
    image:
      "https://show.moxcreative.com/techit/wp-content/uploads/sites/19/elementor/thumbs/software-engineers-working-on-project-and-programming-in-company-pgrqoj4p2w8ddsuo5r2pdrwmsa39amzmtv5c54i1fc.jpg",
  },
  {
    content:
      "A secure and reliable telemedicine solution that enables healthcare providers to offer virtual consultations to patients from anywhere.",
    name: "TeleConsult Platform",
    image:
      "https://show.moxcreative.com/techit/wp-content/uploads/sites/19/elementor/thumbs/workplace-of-software-engineer-pgrqoppkeqhdn2l43bx3d88uxz6tsipr6rpqi28a7s.jpg",
  },
  {
    content:
      "An intuitive app for both patients and healthcare providers to monitor health metrics, track medications, and set reminders for appointments and treatments",
    name: "Mobile Health Tracker",
    image:
      "https://show.moxcreative.com/techit/wp-content/uploads/sites/19/elementor/thumbs/smartphone-cellphone-networking-telephone-concept-pgrqomw1u8dio8p7jsp7nqyh5tkq5fek6dra28cgqg.jpg",
  },
];

function OurService() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-3/4 m-auto py-24">
        <div className=" text-center py-10 max-w-3xl m-auto">
          <h1 className=" text-5xl font-bold text-center ">
            Discover Our Tech Innovation
          </h1>
          <p className="text-md py-5 font-semibold text-gray-600">
          Unlock innovative tech solutions that transform healthcare and improve outcomes across Africa.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-20">
          {product.map((p, id) => (
            <div key={id} className="services hover:scale-105 ">
              <div>
                <img className=" w-full" src={p.image} alt="" />
              </div>
              <div className="px-5 py-2">
                <div className="py-2 text-lg font-bold">{p.name}</div>
                <div className="text-gray-600 font-semibold">{p.content}</div>
                <div className="py-5 text-backgroundColor font-bold">
                  <button className="">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-8 text-right">
          <button
            className="font-bold border-b-4 hover:border-b-backgroundColor py-1 px-1 text-lg text-gray-600  hover:text-backgroundColor"
            onClick={() => navigate("/technologies")}
          >
            View More
          </button>
        </div>
      </div>
    </>
  );
}

export default OurService;
