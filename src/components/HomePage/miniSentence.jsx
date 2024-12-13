import { useInView } from "react-intersection-observer";

function MiniSentense() {
    const {ref , inView}=useInView({
        threshold:0.1,
        triggerOnce:true
    })
  return (
    <>
      <div className=" text-md semi-bold  grid md:grid-cols-1 lg:grid-cols-3 gap-4  leading-normal  justify-center lg:px-32 px-5 py-24 lg:py-28">
        <div ref={ref} className= {`lg:col-span-2 md-grid py-3 px-2 ${inView? "tilt-in-left-1" :" "}`} >
            <div className="text-backgroundColor    py-5 tracking-wider font-bold">
                ABOUT 
            </div>
        <div className="max-w-4xl py-3 leading-normal">
          <h1 className="text-4xl  font-bold tracking-wide">
           Promoting Healthcare With Tech and Informatics
          </h1>
        </div>
        <p className="max-w-5xl  font-semibold text-gray-600 leading-relaxed tracking-wide" >
         At MeHT LTD, we harness technology to build a healthier, sustainable future. Through partnerships with stakeholders, we implement solutions that enhance healthcare access, delivery, quality, and enormous outcomes across the globe.
        </p>
        <div className="pt-10 ">
            <button className="bg-backgroundColor rounded-md text-white py-2 px-5 font-bold">Discover More</button>
        </div>
        </div>
        <div className="hidden lg:block"><img className="slizer  absolute hidden    lg:block lg:top-[650px] try:left-[800px] lg:left-[970px]"  src="https://show.moxcreative.com/techit/wp-content/uploads/sites/19/2021/11/innovative-business-technology-1536x1024.jpg" alt="" /></div>
        <div className="Carefront@2331">

            
            <img className=" slizer2 lg:hidden  "  src="https://show.moxcreative.com/techit/wp-content/uploads/sites/19/2021/11/innovative-business-technology-1536x1024.jpg" alt="" />
        </div>
        {/* <div className="hidden md:block lg:hidden">mdxxxxxxx</div> */}
        
      </div>
    </>
  );
}

export default MiniSentense;
