import contact from "../../assets/img/contactus.png"
function IntroContact() {
    return (  <>
    <div>
        <div className="h-[500px] hidden lg:block md:block relative ">
          <img
            className="absolute h-full w-full object-cover object-center"
            src={contact}
            alt="nature image"
          />
          <div className="absolute inset-0 h-full w-full bg-black/50"></div>
          <div className="absolute z-10 text-white top-[200px]  w-2/4  left-[400px]">
            <h1 className="text-7xl tracking-normal text-center py-5 font-bold leading-tight">
              Contact Us
            </h1>
            {/* <p className="text-xl text-center tracking-normal leading-normal font-semibold capitalize">
              Murphy eHealth Technologies offers a wide range of services
              designed to support the digital transformation of healthcare
              systems.
            </p> */}
          </div>
        </div>
      </div>
    </>);
}

export default IntroContact;