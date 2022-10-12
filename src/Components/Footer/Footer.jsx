import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        HM Talha
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="footer__social">
        <a href="https://www.facebook.com/people/HM-Talha/100007991268920/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/hm_talha_/">
          <FaInstagram />
        </a>
        <a href="https://github.com/HM-Talha">
          <FaGithubAlt />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; HM-Talha, All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
