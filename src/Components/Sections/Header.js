import React, { Component } from 'react'

import '../../Styles/HeaderSection.css'

import { clearInterval } from 'timers'

import { scroller } from 'react-scroll'


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subtitles: [' JS Developer', 'UI Developer', ' UX Developer'],
            titleIndex: 0
        }
    }
    componentDidMount() {
        this.rotating = setInterval(this.rotateTitle, 2000)
    }
    componentWillUnmount() {
        clearInterval(this.rotating)
    }
    rotateTitle = () => {
        var { titleIndex, subtitles: { length } } = this.state;
        titleIndex++;
        this.setState({
            titleIndex: titleIndex >= length ? 0 : titleIndex
        })
    }
    scrollTo() {
        scroller.scrollTo('about', {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    render() {
        return(
            <div>
                <div className='headerContainer fade-in'>
                    <div className='headerTitle'>
                        <p className='title'>CRAYCRAFT</p>
                        <p className='subtitle'> 
                            {
                                this.state.subtitles[this.state.titleIndex]
                            }
                        </p>
                    </div>
                    <div className='chevContainer bounce' onClick={this.scrollTo}>
                        <div className='chevLeft'></div>
                        <div className='chevRight'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header