import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshakeSimple,
  faScrewdriverWrench,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";

function ServiceIntro() {
    const {ref , inView}=useInView({
        threshold:0.1,
        triggerOnce:true
    })
  return (
    <>
      <div className="w-3/4 m-auto py-24">
        <div className={`m-auto text-center max-w-4xl ${inView? "slide-in-left" :" "}`} ref={ref} >
          <h6 className="text-sm text-backgroundColor uppercase tracking-wider font-bold py-5">
            why businesses choose us
          </h6>
          <h1 className="text-5xl font-bold py-4 tracking-wider">
            Jumpstart your business
          </h1>
          <p className="text-md font-semibold text-gray-600">
          Accelerate growth with tailored solutions that optimize operations and drive success. At Murphy, we provide the tools and expertise to streamline your processes, enhance efficiency, and unlock new opportunities. Let us help you build a solid foundation for long-term success.


          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 m-auto max-w-5xl py-24 text-center">
          <div>
            <FontAwesomeIcon
              className="text-[40px] text-backgroundColor"
              icon={faHandshakeSimple}
            />
            <h2 className="py-2 tracking-wider text-xl font-bold">
              We're Loyal
            </h2>
            <p className="text-sm font-semibold text-gray-600">
            Loyalty drives everything we do. We are committed to building lasting relationships with our clients, delivering consistent support, and ensuring their success every step of the way.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              className="text-[40px] text-backgroundColor"
              icon={faScrewdriverWrench}
            />
            <h2 className="py-2 tracking-wider text-xl font-bold">
              We're helpful
            </h2>
            <p className="text-sm font-semibold text-gray-600">
            We prioritize your needs. Our team is always ready to provide expert guidance and support, ensuring you have the resources to overcome challenges and achieve your goals.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              className="text-[40px] text-backgroundColor"
              icon={faShuffle}
            />
            <h2 className="py-2 tracking-wider text-xl font-bold">
              We're Flexible
            </h2>
            <p className="text-sm font-semibold text-gray-600">
            We adapt to your unique needs. Our solutions are designed to be flexible, ensuring we can quickly respond to changes and support your business as it evolves.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceIntro;
