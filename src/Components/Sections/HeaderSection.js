import React, { Component } from 'react'

import '../../Styles/HeaderSection.css'

class HeaderSection extends Component {
    render() {
        return(
            <div className='headerContainer fade-in'>
                <div className='headerTitle'>
                    <p className='title'>CRAYCRAFT</p>
                    <p className='subtitle'> Design First Developement </p>
                </div>
            </div>
        )
    }
}

export default HeaderSection