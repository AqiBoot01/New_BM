import React from "react";
import './BMgame.css';
import Header from "../General_Components/Header";
import space from './images/space.png';
import stone from './images/stones.png';
import abstract from './images/Abstract.png';
import cons from './images/Cons.png';
import MainText from "../General_Components/MainText/MainText";
const BMgame = ()=>{
    return(
        <section className="BMgame">

            <div className="main_section">
         <Header code="4"></Header>
         <h1 className="MainText"> BM GAME</h1>
        
        <h2 className="game_text_1">BMVerse™ The First Global Web3 Community For Game designer Professionals</h2>

        <div className="game_box_1">
        <div className="box_1">
                <img src={space}></img>

            </div>
            <div className="box_2">
                <h3 className="box_text">Gamification</h3>
                <p className="para_style">
                Among all the projects working in the rarity field, the one that focuses
more on the rare subject can be more special and rarer than one spends
time producing rare products. When a distinguished part of a project
is focused on the subject, it would lead to project strength.
                </p>

            </div>
            
        </div>

        <div className="game_box_2">
        <div className="box_1">
                <img src={stone}></img>

            </div>
            <div className="box_2">
                
                <h4>Everything is ready for any game development team here.</h4>
                <p>
Amazing stories, game characters, and many exciting in-game items are all
prepared for any professional video game development team in 
the blockchain space.
                </p>

            </div>
            
        </div>

        <div className="abstract">
                <img src={abstract}></img>
            </div>


            <div className="game_text_2">
                <p>
                The theory of the savior generation, which directly refers to all the netizens and is called the generation Z
as a provider for the growth of the alpha generation and their guide, has focused totally on game development,
which apart from entertainment and creating an exciting atmosphere, seeks to make It as a platform to take
creativity and reaching 100% of human abilities.<br></br>
The first step, to take so, is to dominate decentralization in a radical way on the Alpha generation.
Game making is our first action by which We will show the alpha generation that man is a creator And
not just a consumer.
                </p>
            </div>


            <div className="cons">
                <img src={cons}></img>
            </div>

        
               <h1 className="game_text_3">Generations move one after another toward evolution</h1>


             <div className="game_text_4">
                <p className="para_style">This evolution needs a platform that each generation takes from the previous generation. We explained
in detail about the generation of the Savior and how it was formed in an article, and it is mentioned
that the alpha generation needs a decentralized platform to implement social justice. The task of
providing the prerequisites and teaching the Alpha generation to benefit from all the potentials of a
decentralized platform is the responsibility of the generation Z. Therefore, generation Z can be called
the prerequisites’ provider, and generation Alpha can be called the generation of the Saviors and residents
of a justice-oriented society in which %100 of people’s abilities are used.

</p>
             </div>



             </div>


        </section>
    )
}

export default BMgame;