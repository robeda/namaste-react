 import React from 'react';
import { createRoot } from "react-dom/client";
import logo from "./assets/logo2.png";
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
        <div >
           <img
        src="/assets/logo2.png"
        alt="Logo"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "contain"
        }}
        />
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
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>

        </div>
    )

}
 const root = createRoot(document.getElementById("root"));
 root.render(<AppLayout/>);