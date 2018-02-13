import React, { Component } from 'react'

import '../../Styles/Navigation.css'

import { scroller } from 'react-scroll'



class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            opacity: this.props.active ? 1 : 0
        }
    }
    scrollTo(section) {
        this.props.navControl()
        scroller.scrollTo(section, {
            duration: 900,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }


    render() {
        return(
            <div className='menuContainer' >
                <div className='menuItemsContainer'>
                    <div className='menuItem' onClick={() => this.scrollTo('about')}>ABOUT</div>
                    <div className='menuItem' onClick={() => this.scrollTo('projects')}>PROJECTS</div>
                    <div className='menuItem' onClick={() => this.scrollTo('contact')}>CONTACT</div>
                </div>
            </div>
        )
    }
}

export default Menu