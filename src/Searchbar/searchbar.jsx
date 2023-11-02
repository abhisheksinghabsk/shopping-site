import React from "react";
import { FiSearch } from "react-icons/fi";
import "./searchbar.css";
// import { icons } from "react-icons";

export default function Searchbar() {
  return (
    <div className="searchbar">
      <div className="section-2">
        <div className="Logo">
          <img src="Logo-image1.png" alt="This is Logo" />
        </div>
        <div class="search">
          {/* <form action="#"> */}
          <input
            className="search1"
            type="text"
            placeholder=" Search "
            name="search"
          />
          <div className="search-icon">{FiSearch}</div>
          {/* </form> */}
        </div>
        <div className="account">
          <p>Your Account</p>
          <div class="vl"></div>
          <img src="bag-icon2.png" alt="This is bag icon" />
        </div>
      </div>
    </div>
  );
}
