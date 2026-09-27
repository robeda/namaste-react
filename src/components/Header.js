import { useState } from "react";
const logo = new URL("./../../assets/image_6bcc545c.jpg", import.meta.url).href;
export const Header = () => {
  const [buttonName,setButtonName] = useState("Login")
  const buttonClick = () =>{
    setButtonName(buttonName == "Login" ? "Logout":"Login")
  }
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
          <li><button onClick={buttonClick}>{buttonName}</button></li>
        </ul>
      </div>
    </div>
  );
};