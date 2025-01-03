import { useInView } from "react-intersection-observer";

function MiniSentense() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <>
      <div className="   grid md:grid-cols-1 lg:grid-cols-1 gap-4   text-center  justify-center lg:px-32 px-5 py-24 lg:py-36">
        <div
          ref={ref}
          className={`lg:col-span-2 md-grid py-3 px-2 ${
            inView ? "tilt-in-left-1" : " "
          }`}
        >
          <div className="text-blue-400 uppercase   text-sm py-5 tracking-widest font-bold">
            Welcome To Murphy eHealth Technologies Limited
          </div>
          <div className="max-w-4xl m-auto mt-5 leading-normal">
            <h1 className="text-3xl  font-bold tracking-wide">
              Empowering Healthcare Through Technology
            </h1>
          </div>
          <p
            className="max-w-xl m-auto mt-5   text-gray-500 text-sm leading-loose
         tracking-wider"
          >
            At MeHT Limited, we harness cutting-edge technology to build a
            healthier, more sustainable future. Through strategic partnerships
            and innovative solutions, we enhance healthcare access, improve care
            quality, and drive better health outcomes globally. Our expertise
            spans  <span className="text-backgroundColor">eHealth solutions</span>, <span className="text-backgroundColor">IoT products</span> , and <span className="text-backgroundColor">compassionate domiciliary care</span>, empowering healthcare providers and patients with the tools
            they need for better health management, both at home and in clinical
            settings.
          </p>
          <div className="pt-10 ">
            <button className="bg-backgroundColor text-xs uppercase rounded-md text-white py-3 px-8 font-bold">
              More about us
            </button>
          </div>
        </div>
        {/* <div className="hidden lg:block"><img className="slizer  absolute hidden    lg:block lg:top-[650px] try:left-[800px] lg:left-[970px]"  src="https://show.moxcreative.com/techit/wp-content/uploads/sites/19/2021/11/innovative-business-technology-1536x1024.jpg" alt="" /></div> */}
        {/* <div className="Carefront@2331">

            
            <img className=" slizer2 lg:hidden  "  src="https://show.moxcreative.com/techit/wp-content/uploads/sites/19/2021/11/innovative-business-technology-1536x1024.jpg" alt="" />
        </div> */}
        {/* <div className="hidden md:block lg:hidden">mdxxxxxxx</div> */}
      </div>
    </>
  );
}

export default MiniSentense;
