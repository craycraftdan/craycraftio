import React, { Component } from 'react'

import '../../Styles/Projects.css'

import PokeDexImage from "../../Assets/Images/Pokedex.png"

class Projects extends Component {
    render() {
        return(
            <div id='projects'>
                <div className='projects-container'>
                    <div className='project-box'>
                        <div className='skill-container'>
                            <div className='skill'>React</div>
                            <div className='skill'>Redux</div>
                            <div className='skill'>ES6</div>
                            <div className='skill'>MongoDB</div>
                            <div className='skill'>Semantic UI</div>
                            <div className='skill'>Node JS</div>
                        </div>
                        <img src='https://i.imgur.com/vNGKY3K.jpg' alt=''/>
                        <div className='project-card-footer'>
                            <p>PROJECT MANAGEMENT TOOL</p>
                            <p>A web app to help organize communication between IT and Real Estate during new store openings.</p>
                            </div>
                    </div>
                    <div className='project-box'>
                        <div className='skill-container'>
                            <div className='skill'>Javascript</div>
                            <div className='skill'>API.AI</div>
                            <div className='skill'>Node.JS</div>
                        </div>
                        <img src='https://i.imgur.com/6efkl0v.jpg' alt=''/>
                        <div className='project-card-footer'>
                            <p>CHAT BOT</p>
                            <p>Cisco Spark chat bot that helped new hires get the answers to commonly asked questions.</p>
                            </div>
                    </div>
                </div>
                <div className='projects-container'>
                    <div className='project-box'>
                        <div className='skill-container'>
                            <div className='skill'>CSS3</div>
                            <div className='skill'>BootStrap</div>
                            <div className='skill'>jQuery</div>
                        </div>
                        <img src='https://i.imgur.com/GDnzQD1.jpg' alt=''/>
                        <div className='project-card-footer'>
                            <p>TWITCH STREAMER LANDING PAGE</p>
                            <p>Landing page for a twitch streamer. Made with bootstrap, Adobe Preimere, CSS, Javascript, and HMTL.</p>
                            </div>
                    </div>
                    <div className='project-box'>
                        <a href="https://codepen.io/craycraftdan/pen/RMPQOZ" target="_blank" rel="noopener noreferrer" style={{outline: 'none', textDecoration: 'none'}}>
                            <div className='skill-container'>
                                <div className='skill'>React.JS</div>
                                <div className='skill'>Javascript</div>
                                <div className='skill'>SASS</div>
                            </div>
                            <img src={PokeDexImage} alt='Pokedex'/>
                            <div className='project-card-footer'>
                                <p>POKEDEX</p>
                                <p>I built a Pokemon pokedex to show some basic search/filtering using React.JS. Click to see it in action.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects