import React, { Component } from 'react'

import '../../Styles/Footer.css'

class Footer extends Component {
    render() {
        return(
            <div className='footer-container'>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <a href="https://github.com/craycraftdan" target="_blank" rel="noopener noreferrer">
                        <i className="footer-icon fab fa-github fa-4x"></i>
                    </a>
                    <a href="https://twitter.com/TheSirFry" target="_blank" rel="noopener noreferrer">
                        <i className="footer-icon fab fa-twitter fa-4x"></i>
                    </a>
                    <a href="https://codepen.io/craycraftdan/" target="_blank" rel="noopener noreferrer">
                        <i className="footer-icon fab fa-codepen fa-4x"></i>
                    </a>
                </div>
                <p>Crafted by Craycraft © 2018</p>
            </div>
        )
    }
}

export default Footer