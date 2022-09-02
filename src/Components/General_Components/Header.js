import React from "react";
import Navigation from "./Navigation/Navigation";
import HeaderImage from "./HeaderImage/HeaderImage";
import HeaderLinks from "./HeaderLinks/HeaderLinks";



const Header =(props)=>{
 return(
    <React.Fragment>
        <Navigation></Navigation>
        <HeaderImage code={props.code}></HeaderImage>
        <HeaderLinks></HeaderLinks>

    </React.Fragment>
 )
};

export default Header;

