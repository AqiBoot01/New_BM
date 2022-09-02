import React from "react";
import './Footer.css';

const Footer =()=>{
    return(
        <section className="footer">
             <div className="footer_div_1">
                <h3>Copyright 2022 — Designed and Developed by <span><a className="footer_bmverse">BMverse</a></span></h3>
             </div>
             <div className="footer_div_2">
                <a href="#">Social and Commuinity </a>
                <a href="#">site map</a>
                <a href="#">Contact us</a>
                <a href="#">Privacy Policy</a>
             </div>

        </section>
    )
}

export default Footer;