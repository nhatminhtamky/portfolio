import React from "react";
import logo from "../logo.svg";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
const Navbar = ()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto" >
                

                        <li className="nav-item active">
                            <a className="nav-link" href="#">about me</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">work experience</a>
                        </li>
 
                        <li className="nav-item">
                            <a className="nav-link" href="#">education</a>
                        </li>
            
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar