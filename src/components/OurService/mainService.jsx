import ContactCard from "../../layouts/ContactCard";
import ServiceIntro from "./Intro2";
import ServiceContent from "./content";
import IntroService from "./intro";

// import ourSerices from "../../assets/img/ourservice.png"
function MainService() {
  return (
    <>
      <div>
        <IntroService />
      </div>
      <div>
        <ServiceIntro />
      </div>
      <div>
        <ServiceContent />
      </div>
      <div>
        <ContactCard/>
      </div>
    </>
  );
}

export default MainService;
