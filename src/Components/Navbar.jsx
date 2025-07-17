import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";

function Navbar() {
  const [openLinks, setOpenLiinks] = useState(false);

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src="/pizzaLogo.png" alt="logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={() => setOpenLiinks(!openLinks)}>
          {" "}
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
