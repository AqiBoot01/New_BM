import React from "react";
import './BMmega.css';

import Header from "../General_Components/Header";
import queen from './images/queen.png';
import multipleQueen from './images/multipleQueen.png';
import sekeGirl from './images/sekeGirl.png';
import Anton from './images/Anton.png';
import AntonLand from './images/AntonLand.png';
import jewelCover from './images/JewelCover.png';
import bloodWar from './images/bloodWar.png';
import gade from './images/gade.png';
import megalast from './images/megalast.png';
import girlVideo from './images/girl.mp4';
import Glowbg from "../General_Components/Glowbg/Glowbg";
import Footer from "../General_Components/Footer/Footer";
const BMmega = ()=>{
    return(

     <section className="BMmega">

        <div className="main_section">
        <Header code="3"></Header>
        {/* <Glowbg></Glowbg> */}
        <h1 className="MainText"> BM MEGA</h1>
        <h3 className="Mega_text">
        Imagination, Technology, History and Reality are the Main Building Blocks of the BM Mega.
        </h3>
        <div className="Mega_box_1">
            <div className="box_1">
                <img src={queen}></img>
            </div>
            <div className="box_2 para_style">
                <p>
                BM Mega is the most specialized and comprehensive NFT collection
in the field of video games’ characters. This collection consists of
50 unique collections, each of which contains 12 unique characters
with a fascinating and astonishing story.
                </p>
            </div>

        </div>

        <div className="multiple_queen">
            <img src={multipleQueen}></img>
        </div>

        <div className="mega_text_2">
            <p className="para_style">Finally, each collection contains a work called The Last Supper, in which all 12 characters of the collection
are cryptically talking to each other around a table in a certain standing position and form, each of which
conveys an important message. In the Mega Collection, the bridge is made from imagination to reality,
and this feature is realizable right where the unique ability and feature that each character has, is made
in the real world in the form of a hashed jewel, and its NFT is tradable in the NFT Market Place.</p>
        </div>


        <h1 className="antverse">
        <span className="ant">ANT</span>verse
        </h1>
          
          <div className="mega_text_3">
            <p>Difficulty or luck, love or hate, science or habit, each became a factor for an ant in a corner of a galaxy
to surpass its congeners and discover a unique power within itself. Ant Verse tells a story of 12 mutant
ants, each of them, during an event and under special circumstances, left the routine of their lives
and under the influence of the circumstances around them, to achieve a goal that is thought to be
madness for other members of the society, they reach extraordinary capabilities.</p>
          </div>


          <div className="Mega_box_2">
            <div className="box_1 .rotating"> 
                {/* <img src={sekeGirl}></img> */}
                <video src={girlVideo} autoPlay="true" loop></video>
            </div>
            <div className="box_2 para_style">
                <p>
                The life story of these 12 ants is mysteriously tied together
in such a way that it is difficult to guess the beginning and
the end of this strange story.<br></br>
The desire for immortality in one has ignited a flame in the
heart of the other so that both of them can be a factor in
the revolution in a government that another ant has
planned for centuries.<br></br>
These mutant ants are interacting with each other and their
ability to grow and improve is still active.<br></br>
Their biggest characteristic is rarity, so that with the 
improvement and evolution of other characteristics,
                </p>
            </div>
          </div>

          <h1 className="mega_big">
          “These Mutants Would Become Rarer”
          </h1>


          <div className="Anton" >
            <img src={Anton}></img>
        </div>


        <div className="Mega_box_3">
            <div className="box_1">
                <img src={AntonLand}></img>
            </div>
            <div className="box_2">
                <h3 className="box_text">“ANTVerse” in Gaming</h3>
                <p className="para_style">In addition to the unique story of how they were formed, the mutant ants
of the Mega Collection were actually made for the development of video games,
and all of them were individually converted into NFTs, creating a unique and
professional collection. On the other hand, the features and capabilities of
these characters have also become NFT and are tradable. Even the cards
that enhance the abilities of the characters (known as Magical Potion) are
works of art that have no equivalent in the real world and are offered 
in NFT format.</p>
            </div>

        </div>


        <h2 className="mega_medium">
        “The abilities of each character can be activated in three parts”
        </h2>

        <div className="Mega_box_4">
            <div className="box_1">
                <img src={jewelCover}></img>
            </div>
            <div className="box_2">
            <h3 className="box_text">The First Part of the Hashed Gems</h3>
                <p className="para_style">You can use BMJewel hashed items to activate the
first unique abilities (out of 3) of each character;
By buying jewelry for your character’s ability,
use the code engraved on it to activate
the desired ability.</p>
            </div>

        </div>



        <div className="Mega_box_5">
            <div className="box_1">
                <img src={bloodWar}></img>
            </div>
            <div className="box_2">
            <h3 className="box_text">The second Part of the BM Cards</h3>
                <p className="para_style">The second step to promote and develop your character is available by
purchasing magical potion game cards at BMVerse NFT Market Place.
Magical potions are actually a part of works of art that were
created 40 years ago in the field of pen dotting.
the desired ability.</p>
            </div>

        </div>


        <div className="gade">
            <img src={gade}></img>
        </div>


        <div className="mega_text_2 mega_special">
            <p className="para_style">Activating the third ability of each character requires its owner’s taste and expertise. The third ability is activated
only if the character is developed by its owner. This development includes a change in the appearance or a special
improvement in the characteristics by using coding and so on.<br></br>
After receiving the third ability of each character, you will actually have access to one of the codes available in<br></br>
the Last Supper work. The Ant Verse Last Supper is a work of art taken from Da Vinci’s Last Supper, in which all 12
characters are mysteriously standing around a table that needs to be decoded.
</p>
</div>

<div className="megalast" >
            <img src={megalast}></img>
        </div>

        </div>
        <Footer></Footer>
     </section>
    )
}

export default BMmega;