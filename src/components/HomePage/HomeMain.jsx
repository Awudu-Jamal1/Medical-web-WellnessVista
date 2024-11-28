import About from "../AboutUs/About";
import Blogs from "../Blogs";
import Doctors from "../Doctors";
import Home from "../Home";
import Services from "../Services";
import MiniSentense from "./miniSentence";
import OurService from "./services";
import Testimonials from "./testimonial";

function HomeMain() {
    return (  <>
    <div>
        <div><Home/></div>
        {/* <div><About/></div> */}
        <div><MiniSentense/></div>
         
         <div><Services/></div> 
         <OurService/>  
        {/* <div><Blogs/></div> */}
        <Testimonials/>
    </div>
    </>);
}

export default HomeMain;