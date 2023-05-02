import React from "react";
import "./header.css";
import Typed from "react-typed";
const Header = ()=>{
    return (
        <div className="header-wraper">
            <div className="main-info">
            <h1>Software Developer</h1>
            <Typed className="typed-text" strings={["Hi Everyone...", "My full name's Nguyen Huu Nhat Minh...", "I'm a Software Developer."]}
            typeSpeed={50} backSpeed={30} loop></Typed>
            {/* <a href="#" className="btn-main-offer">Contact me</a> */}
            </div>  
        </div>
    )
} 

export default Header;