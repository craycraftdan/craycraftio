import React, { Component } from 'react'

import '../../Styles/About.css'
import mongoLogo from '../../Assets/Images/MongoLogo.png'
import nodeLogo from '../../Assets/Images/NodeLogo.png'
import reactLogo from '../../Assets/Images/ReactLogo.png'
import reduxLogo from '../../Assets/Images/ReduxLogo.png'
import aboutMeSVG from '../../Assets/Images/Browser Window.svg'
import skillsSVG from '../../Assets/Images/Coffee Cup.svg'
// import reactLogoSVG from '../../Assets/Images/ReactLogo.svg'


class About extends Component {
    render() {
        return(
            <div className="about-section" id="about">

                <div className="about-me-container">
                    <img src={aboutMeSVG} alt="About Me SVG" style={{width: '100%'}}></img>
                </div>

                <div className="skills-container">
                    <div className="smoke smokeOne"></div>
                    <div className="smoke smokeTwo"></div>
                    <div className="smoke smokeThree"></div>
                    <div className="smoke smokeFour"></div>
                    <img src={skillsSVG} alt="About Me SVG"></img>
                </div>

                <div className="logo-container">
                    <img src={mongoLogo} alt='' style={{width: '175px', height: '150px'}}/>
                    <img src={nodeLogo} alt='' style={{width: '150px', height: '150px'}}/>
                    <img src={reactLogo} alt='' style={{width: '210px', height: '150px'}}/>
                    <img src={reduxLogo} alt='' style={{width: '150px', height: '140px'}}/>
                </div>

            </div>
        )
    }
}

export default About