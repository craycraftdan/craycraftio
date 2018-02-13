import React, { Component } from 'react'
import Menu from './menu.js'
import '../../Styles/Navigation.css'
import '../../Styles/Animations.css'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
        this.navControl = this.navControl.bind(this)
    }

    navControl() {
        this.state.active ? this.setState({active: false}) : this.setState({active: true})
    }

    render() {
        return(
            <div>
                <div className='navContainer' onClick={this.navControl} >
                    <div className={this.state.active ? 'activeBarOne' : 'bar'} />
                    <div className={this.state.active ? 'activeBarTwo' : 'bar'} />
                    <div className={this.state.active ? 'activeBarThree' : 'bar'} />
                </div>
                { this.state.active ? 
                    <Menu navControl={this.navControl.bind(this)} active={this.state.active} /> 
                    : null 
                }
            </div>
        )
    }
}

export default Navigation