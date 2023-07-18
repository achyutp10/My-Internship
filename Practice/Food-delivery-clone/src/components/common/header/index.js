import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://w7.pngwing.com/pngs/4/102/png-transparent-fork-and-spoon-gps-logo-take-out-online-food-ordering-delivery-restaurant-the-restaurant-door.png"
        alt="Logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rs-marker absolute-center location-icon"></i>
              <div>Biratnagar</div>
            </div>
            <i className="fi fi-sr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-seperator"></div>
          <div className="header-searchBar">
            <i class="fi fi-br-search absolute-center search-icon"></i>
            <input
              placeholder="Search here"
              className="search-input"
              type="text"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/data/user_profile_pictures/d23/5dc8757691f09b3b0192838d35bb5d23.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="profile"
            className="header-profile-image"
          />
          <span className="header-username">Achyut</span>
          <i class="fi fi-br-angle-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
