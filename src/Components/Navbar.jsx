import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src="/pizzaLogo.png" alt="Logo" />
      </div>

      <div className="toggleButton" onClick={toggleNavbar}>
        <ReorderIcon className="hamburgerIcon" />
      </div>

      <div className={`rightSide ${openLinks ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpenLinks(false)}>
          Home
        </Link>
        <Link to="/menu" onClick={() => setOpenLinks(false)}>
          Menu
        </Link>
        <Link to="/about" onClick={() => setOpenLinks(false)}>
          About
        </Link>
        <Link to="/contact" onClick={() => setOpenLinks(false)}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
