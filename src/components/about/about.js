import React from "react";
import './about.css';

export default function About(){
    return(
        <div className="about">
            <div className="about-text">
            <h2 className="header-about">about me</h2>
            </div>
            <img className="private-image" src= {require('../image/AnhtheMinh3x4.jpg')} alt="Nhat Minh" />
            
    
        </div>
    )    
}
