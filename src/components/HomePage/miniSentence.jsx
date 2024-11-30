function MiniSentense() {
  return (
    <>
      <div className=" text-md semi-bold  grid md:grid-cols-1 lg:grid-cols-3 gap-4  leading-normal  justify-center lg:px-32 px-5 py-24 lg:py-28">
        <div className= "lg:col-span-2 md-grid py-3 px-2">
            <div className="text-backgroundColor  py-5 tracking-wider font-bold">
                ABOUT US
            </div>
        <div className="max-w-4xl py-3 m-auto  leading-normal">
          <h1 className="text-4xl  font-bold tracking-wide">
            Promoting Healthcare With IT Solutions
          </h1>
        </div>
        <p className="max-w-5xl m-auto font-semibold text-gray-600 leading-relaxed tracking-wide" >
          At Murphy, we are committed to delivering innovative health technology
          solutions and services that empower healthcare organizations to thrive
          in the digital age. With a team of experienced professionals, we
          provide customized healthcare technology strategies, reliable support,
          and cutting-edge solutions tailored to meet the unique needs of your
          organization.
        </p>
        <div className="pt-10">
            <button className="bg-backgroundColor rounded-md text-white py-2 px-5 font-bold">Discover More</button>
        </div>
        </div>
        <div className="hidden lg:block"><img className="slizer  absolute hidden    lg:block lg:top-[700px] lg:left-[1000px]"  src="https://show.moxcreative.com/techit/wp-content/uploads/sites/19/2021/11/innovative-business-technology-1536x1024.jpg" alt="" /></div>
        <div>

            
            <img className=" slizer2 lg:hidden "  src="https://show.moxcreative.com/techit/wp-content/uploads/sites/19/2021/11/innovative-business-technology-1536x1024.jpg" alt="" />
        </div>
        {/* <div className="hidden md:block lg:hidden">mdxxxxxxx</div> */}
        
      </div>
    </>
  );
}

export default MiniSentense;
