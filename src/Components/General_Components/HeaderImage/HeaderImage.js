import React from "react";
import './HeaderImage.css';
import headerImg1 from '../Images/Header1.png';
import headerImg2 from '../Images/Header2.png';
import headerImg3 from '../Images/Header3.png';
import headerImg4 from '../Images/Header4.png';
const HeaderImage=(props)=>{
    if(props.code=="1")
    {
        return(
            <React.Fragment>
                <div className="Header_img">
                <img src={headerImg1}></img>    
                </div>
                
    
            </React.Fragment>
        )

    }
    if(props.code=="2")
    {
        return(
            <React.Fragment>
                <div className="Header_img">
                <img src={headerImg2}></img>    
                </div>
                
    
            </React.Fragment>
        )

    }
    if(props.code=="3")
    {
        return(
            <React.Fragment>
                <div className="Header_img">
                <img src={headerImg3}></img>    
                </div>
                
    
            </React.Fragment>
        )

    }
    if(props.code=="4")
    {
        return(
            <React.Fragment>
                <div className="Header_img">
                <img src={headerImg4}></img>    
                </div>
                
    
            </React.Fragment>
        )

    }
   
}

export default HeaderImage;

