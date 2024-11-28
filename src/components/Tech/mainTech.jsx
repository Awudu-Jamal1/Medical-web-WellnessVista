import ContactCard from "../../layouts/ContactCard";
import TechContent from "./content";
import IntroTech from "./intro";

function MainTech() {
  return (
    <>
      <div>
        <div>
          <IntroTech />
        </div>

        <div>
          <TechContent />
        </div>
        <div>
            <ContactCard/>
        </div>
      </div>
    </>
  );
}

export default MainTech;
