import React from "react";
import './Navigation.css';

import Logo from '../Images/LogoGod.png'

const Navigation =()=>{
    return(
        <React.Fragment>
            <div className="Navigation">
                <div className="Nav_image">
                 <img src={Logo}></img>
                </div>
                <h1 className="Nav_text">
                    BMVerse.io
                </h1>
                <div className="Nav_button">
                    <a href="#">Connect wallet</a>
                </div>
            </div>

             

        </React.Fragment>
    )
}

export default Navigation;