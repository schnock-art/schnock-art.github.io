import { Link } from "react-scroll";
import React from "react";
import SocialIconsDiv from "./SocialIcons";
import sections from "../../data/sections.json";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
        <img src="./img/logo.png" alt="Logo"  width="120" height="120" viewBox="0 0 187 40" />
        </div>
        <div className="footer--items">
          <ul>
            {sections?.sections?.map((item, index) => (
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to={item.to}
                className="text-md"
              >
                {item.title}
              </Link>
            </li>
            ))}
          </ul>
        </div>
        <SocialIconsDiv/>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made by me</p>
        {/*
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
        */}
      </div>
    </footer>
  );
}

export default Footer;
