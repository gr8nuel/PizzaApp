import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{
          backgroundImage: `url(/multiplePizzas.jpeg)`,
        }}
      ></div>

      <div className="aboutBottom">
        <h1>About Us </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          beatae debitis et. Quaerat sit aut, sequi tenetur eius atque at
          necessitatibus unde impedit rerum odit? Odio eligendi aliquid, quam
          rem facilis culpa nostrum, tempore eos ad, veritatis obcaecati itaque
          harum id. Cupiditate repellendus quas excepturi eos iusto minima
          voluptatibus voluptate possimus velit quam sed esse eius, quasi neque
          animi corrupti fuga magnam. Minus, pariatur repellendus in, aliquam
          voluptates iste ipsam delectus fugit est expedita illum quis vitae
        </p>
      </div>
    </div>
  );
}

export default About;
