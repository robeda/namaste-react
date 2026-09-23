import React from "react";
import { createRoot } from "react-dom/client";
const logo = new URL("./assets/image_6bcc545c.jpg", import.meta.url).href;
/*
header
  logo
  navItems
Body
  search
  restaurant card
footer
   copyright
   links
   address
*/
const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = ({resName, cuisine}) => {
  return (
    <div className="res-card">
      <img className="res-image"
       src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2026/9/14/00e31c5a-4cdc-4c9c-9c8f-66b710a91efa_00001e9a1ef84eb281a045894b7bb6f7966e90cab200.JPG"></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value="searchText"
          onChange={() => onSearch}
        />
      </div>
      <div className="res-container">
     <RestaurantCard resName="Meghana Foods"
     cuisine="Biryani, North Indian" />
     <RestaurantCard resName="KFC"
     cuisine="Fast Foods" />
      </div>
      
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
