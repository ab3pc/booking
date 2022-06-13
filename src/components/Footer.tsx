import React from "react";
import footerIcon from "../assets/images/heart.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <span className="footer__text">
        from
        <a className="footer__link" href="https://binary-studio.com">
          binary studio
        </a>
        with
        <img className="footer__icon" src={footerIcon} alt="heart icon" />
      </span>
    </footer>
  );
};

export default Footer;
