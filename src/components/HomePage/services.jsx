import solution from "../../assets/img/itsolution.jpg";
import aiSolution from "../../assets/img/aisolution.jpg";
import consultation from "../../assets/img/consultation.jpg";
import mobileapp from "../../assets/img/mobileapp.jpg";
import telemedicine from "../../assets/img/telemedicine.jpg";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import prod1 from "../../assets/img/prod1.png"
import prod2 from "../../assets/img/prod2.png"
import prod4 from "../../assets/img/prod4.png"
import prod3 from "../../assets/img/prod3.png"

const product = [
  {
    content:
      "A comprehensive, integrated solution that streamlines hospital and clinic management, from patient registration to billing and reporting",
    name: "eHealth Management System (eHMS)",
    image:prod1},
  {
    content:
      "A secure and reliable telemedicine solution that enables healthcare providers to offer virtual consultations to patients from anywhere.",
    name: "TeleConsult Platform",
    image:
      prod2},
  {
    content:
      "An intuitive app for both patients and healthcare providers to monitor health metrics, track medications, and set reminders for appointments and treatments",
    name: "Mobile Health Tracker",
    image:
      prod3},
  {
    content:"A suite of AI-powered tools that assist medical professionals in diagnosing diseases, interpreting lab results, and identifying treatment options.",
    name:"AI Diagnostics Suite",
    image:prod4}
];

function OurService() {
    const {ref , inView}=useInView({
        threshold:0.1,
        triggerOnce:true
    })
  const navigate = useNavigate();
  return (
    <>
      <div className="w-3/4 m-auto py-32">
        <div className=" text-center py-10 max-w-3xl m-auto">
          <h1 className=" text-3xl font-bold text-center ">
            Discover Our Tech Innovation
          </h1>
          <p className="text-sm leading-loose py-5  text-gray-600">
          Unlock innovative tech solutions that transform healthcare and improve outcomes the globe.
          </p>
        </div>
        <div ref={ref} className={`grid  mt-10  md:grid-cols-2 lg:grid-cols-2 ${inView? "slide-in-bottom" :" "} gap-20`}>
          {product.map((p, id) => (
            <div key={id} className=" hover:scale-105 relative transition duration-700">
              <div>
                <img className=" w-full h-full" src={p.image} alt="" />
                <div className="py-2  w-full text-md  top-40 text-center uppercase leading-loose tracking-widest text-white absolute">{p.name}</div>
              </div>
              {/* <div className="px-5 py-2">
                
                <div className="text-gray-600 font-semibold">{p.content}</div>
                <div className="py-5 text-backgroundColor font-bold">
                  <button className="">Learn More</button>
                </div>
              </div> */}
            </div>
          ))}
        </div>
        <div className="pt-8 text-right">
          <button
            className=" uppercase border  py-3  px-8 text-xs font-semibold  hover:text-backgroundColor"
            onClick={() => navigate("/technologies")}
          >
            View our products
          </button>
        </div>
      </div>
    </>
  );
}

export default OurService;
