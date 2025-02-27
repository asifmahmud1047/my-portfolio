import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { animateScroll as scroll } from 'react-scroll';
import { useEffect, useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";


const Footer = () => {
    const phoneNumber = "+8801785309592";
    const message = "Hi, I want to discuss about your portfolio!";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const [scrollButtonVisible, setScrollButtonVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setScrollButtonVisible(true);
            } else {
                setScrollButtonVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
      <div className=" px-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-12">
        <div className="md:flex items-center justify-between space-y-5 text-center max-w-[1300px] mx-auto">
          <p className="text-xl">&copy; 2025 Asif Mahmud. All rights reserved.</p>
          <div>
            <div className="flex justify-center gap-6 text-3xl  mb-5">
              {/* <Link to={"https://x.com/AsifMahmud73475"} target="_blank">
                <FaTwitter></FaTwitter>
              </Link> */}
              <Link to={whatsappLink} target="_blank">
                <FaWhatsapp></FaWhatsapp>
              </Link>
              <Link
                to={"https://www.linkedin.com/in/asif-mahmud-1a0a25171/"}
                target="_blank"
              >
                <FaLinkedin></FaLinkedin>
              </Link>
              <Link
                to={"https://www.facebook.com/asif.mahmud47"}
                target="_blank"
              >
                <FaFacebook></FaFacebook>
              </Link>
              <Link to={"https://github.com/asifmahmud1047"} target="_blank">
                <FaGithub></FaGithub>
              </Link>
            </div>
          </div>
          <Link to={whatsappLink} target="_blank">
            <p className="text-xl underline">Say Hello</p>
          </Link>

          {scrollButtonVisible && (
            <button
              className="fixed bottom-5 right-5 px-3 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
              onClick={scrollToTop}
            >
              <FaRegArrowAltCircleUp className="text-xl"></FaRegArrowAltCircleUp>
            </button>
          )}
        </div>
      </div>
    );
};

export default Footer;