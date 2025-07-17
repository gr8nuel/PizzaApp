import React from "react";
import "../Styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.instagram.com/gr8nuel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.X.com/gr8nuel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon />
        </a>
        <a
          href="https://www.facebook.com/nuel-okonkwo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
      </div>
      <p> &copy; 2025 nuelpizza.com. All rights reserved. </p>
    </div>
  );
}

export default Footer;
