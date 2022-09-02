import React from "react";
import './BMjewel.css';
import Header from "../General_Components/Header";
import MainText from "../General_Components/MainText/MainText";
import Snak from './images/Snak.png';
import box1 from './images/box1.png'
import Renata from './images/Renata.png';
import Dragon from './images/Dragon.png';
import jewels from './images/jewels.png'
import Footer from "../General_Components/Footer/Footer";
const BMjewel = ()=>{
    return(
        <section className="BMjewel">
            <div className="main_section">
            <Header code="2"></Header>
            <h1 className="MainText"> BM JEWEL</h1>
            <div className="snak_img">
            <img src={Snak}></img>
            </div>
            <h3 className="jewel_text">
            “BM Jewel, the climax point in challenging the boundaries between reality and imagination”
            </h3>
            <div className="jewel_para">
                <p>
                The idea of ​​making jewelry at BMVerse is actually a landmark in challenging the boundaries of the real and virtual world.
Combining the intrinsic value of a piece of art with its virtual potential value, shows that creativity and technology
cannot be valued alongside the art. By working on a precious physical asset in a non-physical world, we have succeeded
in creating an asset that simultaneously can be categorized as a fungible and non-fungible asset.
                </p>
                </div>

                <div className="jewel_box">
                    <div className="jewel_box_1">
                        <h1>Miracle Ability Activator</h1>
                        <img src={box1}></img>

 
                    </div>
                    <div className="jewel_box_2">
                        <img src={Renata}></img>

                    </div>

                </div>

                <div className="jewel_para para_shade">
                    <p>BMJewels is kind of hashed jewels that exists in the real world but having it can simultaneously enable
its owner to generate value in a virtual world as well. What feature can make the connection between
a real world and a virtual world so inseparable?</p>
                </div>


                <div className="snake_box">
                    <div className="snake_img">
                        <img src={Dragon}></img>
                    </div>
                    <div className="snake_text">
                        <p>
                        The advantage of the NFTs available in the BMJewels section
is their high value. These jewels, which are all made by hand,
have a high inherent value due to the artistic design done on
them. The origin of these jewels are actually the abilities and
capabilities of the characters in the Mega Collection, so that
the owner of each of these jewels can activate a special
feature for their characters and promote it by using the
codes engraved on them.

                        </p>

                    </div>
                </div>


                <div className="jewels_img">
                    <img src={jewels}></img>
                </div>

                <div className="jewel_last_text">
                    <h3>
                    All the NFTs that exist in BMVerse are all made by great experts and artists,<br></br>
and months of time have been spent to prepare each of them,<br></br>
and finally all are traceable on the BM Group native<br></br>
NFT Market Place.
                    </h3>

                </div>
           
                </div>
                <Footer></Footer>
        </section>

    )
}

export default BMjewel;