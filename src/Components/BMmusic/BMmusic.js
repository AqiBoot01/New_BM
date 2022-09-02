import React from "react";
import './BMmusic.css';
import Header from "../General_Components/Header";
import MainText from "../General_Components/MainText/MainText";
import Glowbg from "../General_Components/Glowbg/Glowbg";
import Footer from "../General_Components/Footer/Footer";

const Music = ()=>{

    return(
        <React.Fragment>
            <div className="BMmusic">
            <section  className="main_section">   
            <Header code="1"></Header>
            {/* <MainText></MainText> */}
            <h1 className="MainText"> BM MUSIC</h1>
            <p className="identity">IDENTITY</p>
            </section>

            <Footer></Footer>

            </div>
        
        </React.Fragment>
    )
};

export default Music;