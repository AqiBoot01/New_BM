import React from "react";
import './BMgalaxy.css';
import Header from "../General_Components/Header";
import galaxy from './images/galaxy.png';
import line from './images/Line.png';
import sun from './images/sun.png';
import lightText from './images/lightText.png';
import galaxy5 from './images/galaxy5.png';
import galaxy6 from './images/galaxy6.png';
import vains from './images/vains.png'
import step from './images/step.PNG';
import sunVideo from './images/sunVideo.mp4';
import lineImg from './images/lineImg.png';
import video1 from './images/video1.mp4';
import lineImg2 from './images/lineImg2.png';
import video2 from './images/video2.mp4';
import Glowbg from "../General_Components/Glowbg/Glowbg";
import Footer from "../General_Components/Footer/Footer";

const BMgalaxy = ()=>{
    return(
        <section className="BMgalaxy">
            <div className="main_section">
            {/* <Glowbg></Glowbg> */}
            <Header code="4"></Header>
            <h1 className="MainText"> BM GALAXY</h1>
            <div className="galaxy_box_1">
                <div className="box_1">
                    <img src={galaxy}></img>
                </div>
                <div className="box_2">
                    <h3>Man, innately, is a creator, enters the world, uses th creation<br></br>
of others, grows, evolves, and provides what th<br></br>
next generation needs.
</h3>
                </div>

            </div>

            <div className="line">
                <img src={line}></img>
            </div>


            <div className="galaxy_text">
                <p>The BM-Galaxy collection, the most comprehensive multiverse collection, combines science, art, and history.<br></br>
Mankind has been looking for many years to pass the earth and discover life in the galaxies.<br></br>
BMGalaxy has gone further in this path and seeks to create life in galaxies.<br></br>
Imagine yourself as a creator of a galaxy who is able to create a world without limitations<br></br>
in terms of shape, size, features, etc. BMGalaxy has achieved the only experience that mankind is still looking for.</p>
            </div>

            <h2 className="galaxy_text_2">BM Galaxy is a unique masterpiece in combining art and technology.</h2>
            <div className="sunVideo" >
            {/* <img src={sun}></img> */}
                        <video src={sunVideo} loop autoPlay="true"></video>

             </div>

             <div className="line">
                <img src={line}></img>
            </div>


            <div className="step_div_1">
                <div className="step_div_1_para">
                    <p>
                    The Galaxies on which <span className="orange">BMgalaxy</span> is defined can be considered as a living thing,
                    similar to the nature in which we live. <br></br>
                    These galaxies, which were created 30 years ago without any concept design,
                    were created by millions of dots, each of which was the result of a particular
                    vibration in the brain of the designer artist.

                    </p>

                </div>


                <div className="step_1_line_img">
                    <img src={lineImg}></img>

                </div>
                <div className="step_1_video">
                    <video src={video1} loop autoPlay></video>


                </div>
            </div>

            <div className="step_div_2">

                <div className="special_div"></div>

            <div className="step_2_video">
                    <video src={video2} loop autoPlay></video>


                </div>

                <div className="step_2_line_img">
                    <img src={lineImg2}></img>

                </div>

                <div className="step_div_2_para">
                    <p>
                    <span className="orange">Wealth</span> is in our minds, and only creativity and excitement will make it real.


                    </p>

                </div>


               
                
            </div>

            <div className="step_down_para">
                <p>
                Creativity provides ways that few have gone;<br></br>
                 <span className="orange">BM</span>verse is with you on this exciting journey.
                </p>
            </div>


            <div className="lightText">
                <img src={lightText}></img>
            </div>

            <h2 className="galaxy_text_2">“Applying science and laws of nature to realize imagination”</h2>



            <div className="galaxy_box_2">
                <div className="box_1">
                    <img src={galaxy5}></img>
                </div>
                <div className="box_2">
                    <img src={galaxy6}></img>
                </div>

            </div>


            <div className="galaxy_text_box_1">
                <p className="para_style">
                Relying on the data obtained from the analysis of the frequencies produced 
and received by the brain, we realized that it is possible to provide gamers
with the most realistic sense of a virtual world by analyzing and regulating
these vibrations and establishing communication between the parts of the
brain that are more active in creativity and mental imagery with
a super-intelligent core of Metaverse-based games.
 </p>
            </div>


            <div className="galaxy_text_box_2">
                <p className="para_style">
                Using particle systems, simulators developed in artificial intelligence, and
machine learning, we created a unique interaction between the human brain
waves, brain galactic frequency reception, and creator algorithms.
This interaction, which as a matter of fact includes the emotions, thoughts,
and creativity between the player and the super-intelligent core of our
metaverse game, makes connections between the player’s brain neurons.
 </p>
            </div>


            <div className="line">
                <img src={line}></img>
            </div>

            <div className="sun" >
            <img src={vains}></img>
            {/* <video src={sunVideo} loop autoPlay="true"></video> */}
             </div>


             <div className="galaxy_text_box_3">
                <p className="para_style">
                All brain waves are generated by coordinated electrical pulses from masses of interconnected neurons;
Which will ultimately create the unique interactive assets between the metaverse and the real world.
The galaxies on which BMVerse is defined can be considered as a living thing, just like the nature in
which we live.
 </p>
 </div>


 <h2 className="galaxy_last_text">
 Wealth is in our minds, and only creativity and excitement will make it real.
Creativity provides ways that few have gone; BMverse is with you on this
exciting journey.
 </h2>

 </div>

 <Footer></Footer>
        </section>
        
    )
}

export default BMgalaxy;