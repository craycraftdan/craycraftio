import React, { Component } from 'react'

import '../../Styles/About.css'


class About extends Component {
    render() {
        return(
            <div className="about-section" id="about">

                <div className="about-me-container">
                    <p style={{textAlign: 'justify'}}>
                        <span style={{fontSize: '35pt'}}><strong><span style={{color: '#92cdcf'}}>&lt;<span style={{fontSize: '15pt'}}>&nbsp;</span></span></strong><span style={{fontSize: '28pt'}}>ABOUT ME</span></span><br /><span style={{fontSize: '12pt'}}>&nbsp; &nbsp; &nbsp;<span>name="Dan Craycraft"</span></span><br /><span>&nbsp; &nbsp; &nbsp;label="Font-End Developer"</span><br />
                        <span>&nbsp; &nbsp; &nbsp;type="JavaScript"</span><br /><span><span style={{verticalAlign: 'top'}}>&nbsp; &nbsp; &nbsp;onClick={'{'} this.developThings {'}'}</span> <br />
                        <strong><span style={{fontSize: '32pt', color: '#92cdcf'}}>/&gt;</span></strong></span>
                    </p>
                </div>
                <div className="skills-container">
                    <p><span style={{fontSize: '32pt'}}>SKILLS</span> <strong><span style={{color: '#92cdcf', fontSize: '24pt'}}>= {'{'}</span></strong></p>
                    <p><span>&nbsp; &nbsp;front-end: [ ES6 JS React Redux ]</span></p>
                    <p><span>&nbsp; &nbsp;back-end: [ Node Express MongoDB ]</span></p>
                    <p><span>&nbsp; &nbsp;ui-design: [ Photoshop Adobe XD ]</span></p>
                    <p><span style={{color: '#92cdcf', fontSize: '28pt'}}><strong>{'}'}</strong></span></p>
                </div>
            </div>
        )
    }
}

export default About