import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,faPuzzlePiece,faLink
} from "@fortawesome/free-solid-svg-icons";

function OurCulture() {
    return (  <>
    <div>
        <div className="w-3/4 lg:w-full m-auto lg:px-28 py-24">
        <div className="text-backgroundColor uppercase text-center  py-5 tracking-wider font-bold">
                our culture
            </div>
        <div className="max-w-4xl py-3 m-auto text-center  leading-normal">
          <h1 className="text-4xl pb-10 font-bold tracking-wide">
          Our Fundamental Business
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
            <div className="flex border-2  border-backgroundColor  px-5 py-8 ">
                <div> <FontAwesomeIcon className="text-[40px] text-backgroundColor" icon={faLayerGroup} /></div>
                <div className="px-5 ">
                    <h2 className="font-bold text-3xl">Vision</h2>
                    <p className="font-semibold text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
            <div className="flex border-2  border-backgroundColor  px-5 py-10">
                <div> <FontAwesomeIcon className="text-[40px] text-backgroundColor" icon={faPuzzlePiece} /></div>
                <div className="px-5 w-3/4">
                    <h2 className="font-bold text-3xl">Mission</h2>
                    <p className="font-semibold text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
            <div className="flex border-2  border-backgroundColor  px-5 py-10">
                <div> <FontAwesomeIcon className="text-[40px] text-backgroundColor" icon={faLink} /></div>
                <div className="px-5 w-3/4">
                    <h2 className="font-bold text-3xl">Vision</h2>
                    <p className="font-semibold text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div> 
        </div>
        </div>
    </div>
    </>);
}

export default OurCulture;