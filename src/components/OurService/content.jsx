import solution from "../../assets/img/itsolution.jpg";
import aiSolution from "../../assets/img/aisolution.jpg";
import consultation from "../../assets/img/consultation.jpg";
import mobileapp from "../../assets/img/mobileapp.jpg";
import telemedicine from "../../assets/img/telemedicine.jpg";


import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <>
      <div className="w-3/4 m-auto  ">
        <div className="py-5">
          <h2 className="font-bold text-5xl max-w-3xl m-auto text-center">
            We are your strategic partner
          </h2>
          <div className="text-2xl font-semibold  py-4 m-auto text-center capitalize text-gray-600 max-w-3xl ">
            Ready to translate your ideas into innovations that add value to
            your business.
          </div>
        </div>

        <section className="py-14">
          <div className="grid lg:grid-cols-3 gap-10">
            {services.map((p, id) => (
              <div key={id} className="services hover:scale-105 ">
                <div>
                  <img className=" w-full" src={p.image} alt="" />
                </div>
                <div className="px-5 py-2">
                  <div className="py-2 text-lg font-bold">{p.name}</div>
                  <div className="text-gray-600 font-semibold pb-8">
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
