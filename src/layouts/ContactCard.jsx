import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function ContactCard() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-3/4 m-auto">
        <div className="grid lg:grid-cols-2 gap-16 py-16">
          <div>
            <h1 className=" text-2xl lg:text-4xl text-backgroundColor font-bold py-4 tracking-wider">
              Connect with us
            </h1>
            <p className="text-sm font-semibold text-gray-600">
              Follow us for the latest updates, tips, and behind-the-scenes
              insights! Join the conversation and stay connected with Murphy on
              all our social platforms. Let's engage!
            </p>
            <div className="py-5">
              <div>
                <span>
                  <FontAwesomeIcon
                    className="text-gray-600 px-2 text-[35px]"
                    icon={faFacebook}
                  />
                </span>{" "}
                <span>
                  <FontAwesomeIcon
                    className="text-gray-600 px-2 text-[35px]"
                    icon={faXTwitter}
                  />
                </span>{" "}
                <span>
                  <FontAwesomeIcon
                    className="text-gray-600 px-2 text-[35px]"
                    icon={faLinkedin}
                  />
                </span>
              </div>
            </div>
          </div>
          <div>
            <h1 className=" text-2xl lg:text-4xl text-backgroundColor font-bold py-4 tracking-wider">
              Contact us
            </h1>
            <p className="text-sm text-gray-600 font-semibold">
              Get in touch with Murphy today! Whether you have questions or need
              support, we’re here to help you every step of the way.
            </p>
            <div className="py-5 font-bold text-md text-gray-600">
              <button
                className="border-b-2 border-b-gray-600 "
                onClick={() => navigate("/contact")}
              >
                Get Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
