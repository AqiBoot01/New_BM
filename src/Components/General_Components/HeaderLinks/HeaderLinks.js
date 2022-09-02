import React from "react";
import './HeaderLinks.css';
import { Link } from 'react-router-dom';

const HeaderLinks =()=>{
    return(
        <React.Fragment>
            <div className="Nav_links">
                <a href="/bmgame">BM Game</a>
                <a href="/bmgalaxy">BM Galaxy</a>
                <a href="/bmmega">BM Mega</a>
                <a href="/">BM Music</a>
                <a href="/bmjewel">BM Jewel</a>
                <a href="/bmlast">BM Cards</a>
                <a href="#">BM Learn</a>
            </div>

        </React.Fragment>
    )
}

export default HeaderLinks;