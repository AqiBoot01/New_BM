import React from "react";
import Navigation from "../General_Components/Navigation/Navigation";
import './BMlast.css';
import lastGalaxy from './images/lastGalaxy.png';
import linked from './images/linked.png';
import twitter from './images/twitter.png';
import youTube from './images/youTube.png';
import ballon from './images/ballon.png';
import lastVideo from './images/lastVideo.mp4';

const BMlast =()=>{
    return(
        <section className="BMlast">
            <div className="main_section">
            <Navigation></Navigation>
            <div className="last_div">
                <div className="last_main">
                    <div className="last_main_img">
                        <video src={lastVideo} loop autoPlay="true"></video>
                        {/* <img src={lastGalaxy}></img> */}
                    </div>
                    <div className="last_main_content">
                      <h1 className="content_heading">BMverse™</h1>
                      <h2 className="content_discription">The Decentralized Platforms Provider<br></br>
                      Generation ALPHA Prerequisites in Web3
                      </h2>
                      <div className="content_steps">
                        <div className="step">
                            <h3>Community</h3>
                            <h4>Development Capability</h4>
                            <p>The First Global Web3 Community
                                For Designer Professionals.
                                Holders gain access to a global
                                community consisting of the most
                                progressive individuals within the
                                Game & Design industry.</p>
                        </div>
                       

                        <div className="step">
                            <h3>Discover</h3>
                            <h4>unique Senses</h4>
                            <p>Relying on the data obtained from the
analysis of the frequencies produced
and received by the brain, we realized
that it is possible to provide gamers
 with the most realistic sense of a
virtual world . . .</p>
                        </div>


                        <div className="step">
                            <h3>Next-Gen of</h3>
                            <h4>Interactive metaverse games</h4>
                            <p>Man, innately, is a creator, enters
the world, uses the creation of
others, grows, evolves, and
provides what the next generation
needs.</p>
                        </div>
                      </div>
                      <h3 className="content_text">Start of the journey</h3>
                    </div>
                </div>
                <div className="social_media">
                 <div className="media">
                    <a href="#">
                    <img src={linked}></img>
                    </a>
                
                 </div>
                 <div className="media">
                    <a href="#">
                    <img src={twitter}></img>
                    </a>
                
                 </div>
                 <a href="#"></a>
                 <div className="media">
                 <a href="#">
                 <img src={youTube}></img>
                 </a>
                 </div>
                 
                 <div className="media">
                 <a href="#">
                 <img src={ballon}></img>
                 </a>
                 
                 </div>

                </div>
            </div>

            </div>

        </section>
    )
}

export default BMlast;