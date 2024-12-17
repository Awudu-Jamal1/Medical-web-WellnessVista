import solution from "../../assets/img/itsolution.jpg";
import aiSolution from "../../assets/img/aisolution.jpg";
import consultation from "../../assets/img/consultation.jpg";
import mobileapp from "../../assets/img/mobileapp.jpg";
import telemedicine from "../../assets/img/telemedicine.jpg";


import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
const services = [
  {
    content:
      "We design and implement integrated software platforms that streamline hospital management, patient records, and administrative tasks.",
    name: "Healthcare IT Solutions",
    image: solution,
  },
  {
    content:
      "Our telehealth platforms enable healthcare providers to offer remote consultations, diagnostics, and patient monitoring, improving accessibility and convenience.",
    name: "Telemedicine Solutions",
    image: telemedicine,
  },
  {
    content:
      "We develop customized mobile apps for healthcare providers and patients, focusing on improving communication, engagement, and overall health management.",
    name: "Mobile Health Applications",
    image: mobileapp,
  },
  {
    content:
      "We provide advanced data analytics tools powered by artificial intelligence to assist healthcare professionals in decision- making, predictive analytics, and patient care optimization.",
    name: " Data Analytics AI in Healthcare",
    image: aiSolution,
  },
  {
    content:
      "We offer expert consulting and support to healthcare organizations looking to improve their IT infrastructure, implement new systems, or train staff on new technology.",
    name: " Consultation and Support Services",
    image: consultation,
  },
];

function ServiceContent() {
    const {ref , inView}=useInView({
        threshold:0.1,
        triggerOnce:true
    })
  const navigate = useNavigate();
  return (
    <>
      <div className="w-3/4 m-auto  ">
        <div className="py-5">
          <h2 className="text-3xl text-backgroundColor text-center  font-bold tracking-wider">
            We are your strategic partner
          </h2>
          <div className="mt-10 font text-sm text-gray-500 leading-loose tracking-wider text-center ">
            Ready to translate your ideas into innovations that add value to
            your business.
          </div>
        </div>

        <section ref={ref} className={`py-14 ${inView? "slide-in-bottom" :" "}`}>
          <div className="grid lg:grid-cols-3 gap-5 text-center">
            {services.map((p, id) => (
              <div key={id} className="border ">
                <div>
                  <img className=" w-full" src={p.image} alt="" />
                </div>
                <div className="px-5 py-2">
                  <div className="py-2 uppercase tracking-wider text-lg font-semibold text-backgroundColor">{p.name}</div>
                  <div className="text-gray-500 tracking-wider leading-relaxed pb-8">
                    {p.content}
                  </div>
                  {/* <div className="py-5 text-backgroundColor font-bold">
                    <button className="">Learn More</button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </section>
        
      </div>
    </>
  );
}

export default ServiceContent;
