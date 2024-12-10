import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

function Structure() {
    return ( <>
    <div className="">
        <div className=" relative px-0  sm:px-0 lg:px-40">
            <div className="w-full mx-auto lg:w-4/5 absolute z-10">
            <TopNavBar/>
            <Navbar/>
            </div>
            
        </div>
        <div className=""><Outlet/></div>
        <div><Footer/></div>
    </div>
    </> );
}

export default Structure;