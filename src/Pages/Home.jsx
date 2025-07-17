import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="container">
      <div
        className="home"
        style={{
          backgroundImage: `url(/pizza.jpeg)`,
        }}
      >
        <div className="headerContainer">
          <h1>Neul's Pizzeria</h1>
          <p>PIZZA TO FIT ANY TASTE</p>
          <Link to="./menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
