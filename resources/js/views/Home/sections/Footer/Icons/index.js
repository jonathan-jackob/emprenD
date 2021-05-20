import {IoLogoLinkedin} from "react-icons/io"
import {
  FaCcAmex,
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa"

const sizeIcon = 30

export const social_network_icons = [
  <FaFacebookSquare size={sizeIcon} />,
  <FaTwitterSquare size={sizeIcon} />,
  <IoLogoLinkedin size={35} />,
  <FaGooglePlusSquare size={sizeIcon} />,
  <FaPinterestSquare size={sizeIcon} />,
  <FaYoutubeSquare size={sizeIcon} />,
  <FaInstagramSquare size={sizeIcon} />,
]

const sizePayIcons = 22

export const pay_icons = [
  <FaCcVisa size={sizePayIcons} />,
  <FaCcMastercard size={sizePayIcons} />,
  <FaCcDiscover size={sizePayIcons} />,
  <FaCcAmex size={sizePayIcons} />,
  <FaCcPaypal size={sizePayIcons} />,
  <FaCcStripe size={sizePayIcons} />,
]
