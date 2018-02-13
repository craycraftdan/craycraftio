import React, { Component } from 'react'
import swal from 'sweetalert2'

import '../../Styles/Contact.css'


class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            budget: 9500,
            deadline: 6,
            firstName: '',
            lastName: '',
            emailAddress: '',
            projectDetails: '',
            confirmOpen: false
        }
    }

    sliderChange(event) {
        let propName = event.target.name
        this.setState({[propName]: event.target.value})
    }

    deadlineDisplayer() {
        if(this.state.deadline >= 12) {
            return 'No Deadline'
        } else if(this.state.deadline <= 1) {
            return 'Immediately'
        }
        return this.state.deadline + ' Months'
    }

    onSend() {
        const { firstName, lastName, emailAddress, projectDetails } = this.state
        if(firstName && lastName && emailAddress && projectDetails ) {
            swal({
                title: 'Are you sure you want to send?',
                text: "You won't be able to revert this!",
                type: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Send',
                cancelButtonText: 'Dont Send',
                buttonsStyling: true,
                reverseButtons: true,
            }).then((result) => {
                if (result.value) {
                swal(
                    'Sent',
                    'You will get a response back as soon as possible. Thanks!',
                    'success'
                )
                .then(this.onSave())
                // result.dismiss can be 'cancel', 'overlay',
                // 'close', and 'timer'
                } else if (result.dismiss === 'cancel') {
                swal(
                    'Cancelled',
                    'Email Not Sent',
                    'error'
                )
                }
            })
        } else {
            swal(
                'Oops...',
                'Please finish filling out the form!',
                'error'
              )
        }
    }

    onSave() {
        this.setState({
            budget: 9500,
            deadline: 6,
            firstName: '',
            lastName: '',
            emailAddress: '',
            projectDetails: '',
            confirmOpen: false
        })
    }

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

    render() {
        return(
            <div id='contact' className='animated fadeIn'>
                <div className='contact-container'>
                    <div className='header'>
                        <p>CONTACT ME</p>
                    </div>
                    <div className='item'>
                        <div className='inputSet'>
                            <input 
                                type="text" 
                                required 
                                className="clean-input" 
                                name='firstName' 
                                onChange={this.sliderChange.bind(this)} 
                                value={this.state.firstName}
                                />
                            <label className="clean-label" >First Name</label>
                        </div>
                        <div className='inputSet'>
                            <input 
                                type="text" 
                                required className="clean-input" 
                                name='lastName' 
                                onChange={this.sliderChange.bind(this)}
                                value={this.state.lastName}
                                />
                            <label className="clean-label">Last Name</label>
                        </div>
                        <div className='inputSet'>
                            <input 
                                type="text" 
                                required className="clean-input" 
                                name='emailAddress' 
                                onChange={this.sliderChange.bind(this)}
                                value={this.state.emailAddress}
                                />
                            <label className="clean-label">Email Address</label>
                        </div>
                        <div className='inputSet'>
                            <label className='clean-slider-label'>Budget<span className='floatRight'>${this.numberWithCommas(this.state.budget)}</span></label>
                            <input 
                                type="range" 
                                min="1000" 
                                max="20000" 
                                value={this.state.budget} 
                                name='budget' 
                                className="clean-slider" 
                                onChange={this.sliderChange.bind(this)}
                                />
                        </div>
                    </div>

                    <div className='item'>
                        <div className='inputSet'>
                            <textarea 
                                required 
                                className="clean-textArea" 
                                name='projectDetails' 
                                onChange={this.sliderChange.bind(this)}
                                value={this.state.projectDetails}
                                />
                            <label className="clean-textArea-label">Project Details</label>
                        </div>
                        <div className='inputSet'>
                            <label className='clean-slider-label'>Deadline<span className='floatRight'>{this.deadlineDisplayer()}</span></label>
                            <input 
                                type="range" 
                                min="1" 
                                max="12" 
                                value={this.state.deadline} 
                                onChange={this.sliderChange.bind(this)} 
                                name='deadline' 
                                className="clean-slider" 
                                />
                        </div>
                    </div>

                    <div className='itemButton'>
                        <button className='submitButton' onClick={this.onSend.bind(this)}>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact