import {ImMail} from "react-icons/im"
import {IoLogoLinkedin} from "react-icons/io"
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaPinterestSquare,
  FaTumblrSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa"

const sizeIcon = 50

export const social_network = [
  {name: "tweeter", icon: <FaTwitterSquare size={sizeIcon} />},
  {name: "facebook", icon: <FaFacebookSquare size={sizeIcon} />},
  {name: "linkedin", icon: <IoLogoLinkedin size={sizeIcon} />},
  {name: "mail", icon: <ImMail size={sizeIcon} />},
  {name: "g_plus", icon: <FaGooglePlusSquare size={sizeIcon} />},
  {name: "youtube", icon: <FaYoutubeSquare size={sizeIcon} />},
  {name: "pinterest", icon: <FaPinterestSquare size={sizeIcon} />},
  {name: "tumblr", icon: <FaTumblrSquare size={sizeIcon} />},
]
