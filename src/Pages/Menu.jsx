import React from "react";
import { MenuList } from "../Helpers/MenuList";
import MenuItem from "../Components/MenuItem";
import "../Styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, index) => {
          return (
            <MenuItem
              key={index}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
