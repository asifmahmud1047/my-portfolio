import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcon = () => {
    const phoneNumber = "+8801785309592";
    const message = "Hi, I want to discuss about your portfolio!";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
      <div className="flex gap-6 text-3xl ">
        {/* <Link
          to={"https://x.com/AsifMahmud73475"}
          target="_blank"
          className="text-blue-500"
        >
          <FaTwitter></FaTwitter>
        </Link> */}
        <a href={whatsappLink} target="_blank" className="text-green-500">
          <FaWhatsapp></FaWhatsapp>
        </a>
        <Link
          to={"https://www.linkedin.com/in/asif-mahmud-1a0a25171/"}
          target="_blank"
          className="text-blue-600"
        >
          <FaLinkedin></FaLinkedin>
        </Link>
        <Link
          to={"https://www.facebook.com/asif.mahmud47"}
          target="_blank"
          className="text-blue-500"
        >
          <FaFacebook></FaFacebook>
        </Link>
        <Link
          to={"https://github.com/asifmahmud1047"}
          target="_blank"
          className=""
        >
          <FaGithub></FaGithub>
        </Link>
      </div>
    );
};

export default SocialIcon;