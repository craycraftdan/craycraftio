import React /* { useState } */ from 'react';
//import swal from 'sweetalert2';
import { ContactContainer } from './styles';
import '../../../Styles/Contact.css';

const Contact = props => {
  // const [state, setState] = useState({
  //   budget: 9500,
  //   deadline: 6,
  //   subject: 'Project Request',
  //   firstName: '',
  //   lastName: '',
  //   emailAddress: '',
  //   projectDetails: '',
  //   confirmOpen: false,
  // });

  // const sliderChange = event => {
  //   const propName = event.target.name;
  //   setState({ ...state, [propName]: event.target.value });
  // };

  // const deadlineDisplayer = () => {
  //   if (state.deadline >= 12) {
  //     return 'No Deadline';
  //   } else if (state.deadline <= 1) {
  //     return 'Immediately';
  //   }
  //   return state.deadline + ' Months';
  // };

  // const onSend = () => {
  //   const { firstName, lastName, emailAddress, projectDetails } = state;
  //   if (firstName && lastName && emailAddress && projectDetails) {
  //     swal({
  //       title: 'Are you sure you want to send?',
  //       text: "You won't be able to revert ",
  //       type: 'question',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Send',
  //       cancelButtonText: 'Dont Send',
  //       buttonsStyling: true,
  //       reverseButtons: true,
  //     }).then(result => {
  //       if (result.value) {
  //         swal(
  //           'Sent',
  //           'You will get a response back as soon as possible. Thanks!',
  //           'success'
  //         ).then(onSave());
  //         // result.dismiss can be 'cancel', 'overlay',
  //         // 'close', and 'timer'
  //       } else if (result.dismiss === 'cancel') {
  //         swal('Cancelled', 'Email Not Sent', 'error');
  //       }
  //     });
  //   } else {
  //     swal('Oops...', 'Please finish filling out the form!', 'error');
  //   }
  // };

  // const onSave = () => {
  //   const subject =
  //     state.subject + ' from ' + state.firstName + ' ' + state.lastName;

  //   const body =
  //     'Hello, my name is ' +
  //     state.firstName +
  //     ' ' +
  //     state.lastName +
  //     ' and Im emailing to make an inquiry about the following project. %0D%0A' +
  //     'Project Details: ' +
  //     state.projectDetails +
  //     '%0D%0A' +
  //     'Project Budget: ' +
  //     state.budget +
  //     '%0D%0A' +
  //     'Project Deadline: ' +
  //     state.deadline +
  //     '%0D%0A' +
  //     'You can reply to me at: ' +
  //     state.emailAddress;

  //   window.location = `mailto:craycraftdan@gmail.com?Subject=${subject}&Body=${body}`;

  //   setState({
  //     budget: 9500,
  //     deadline: 6,
  //     firstName: '',
  //     lastName: '',
  //     emailAddress: '',
  //     projectDetails: '',
  //     confirmOpen: false,
  //   });
  // };

  // const numberWithCommas = num =>
  //   num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <ContactContainer id="contact">
      Under Construction
      {/* <div className="contact-container">
        <div className="header">
          <p>CONTACT ME</p>
        </div>
        <div className="item">
          <div className="inputSet">
            <input
              type="text"
              required
              className="clean-input"
              name="firstName"
              onChange={sliderChange}
              value={state.firstName}
            />
            <label className="clean-label">First Name</label>
          </div>
          <div className="inputSet">
            <input
              type="text"
              required
              className="clean-input"
              name="lastName"
              onChange={sliderChange}
              value={state.lastName}
            />
            <label className="clean-label">Last Name</label>
          </div>
          <div className="inputSet">
            <input
              type="text"
              required
              className="clean-input"
              name="emailAddress"
              onChange={sliderChange}
              value={state.emailAddress}
            />
            <label className="clean-label">Email Address</label>
          </div>
          <div className="inputSet">
            <label className="clean-slider-label">
              Budget
              <span className="floatRight">
                ${numberWithCommas(state.budget)}
              </span>
            </label>
            <input
              type="range"
              min="1000"
              max="20000"
              value={state.budget}
              name="budget"
              className="clean-slider"
              onChange={sliderChange}
            />
          </div>
        </div>

        <div className="item">
          <div className="inputSet">
            <textarea
              required
              className="clean-textArea"
              name="projectDetails"
              onChange={sliderChange}
              value={state.projectDetails}
            />
            <label className="clean-textArea-label">Project Details</label>
          </div>
          <div className="inputSet">
            <label className="clean-slider-label">
              Deadline
              <span className="floatRight">{deadlineDisplayer()}</span>
            </label>
            <input
              type="range"
              min="1"
              max="12"
              value={state.deadline}
              onChange={sliderChange}
              name="deadline"
              className="clean-slider"
            />
          </div>
        </div>

        <div className="itemButton">
          <button className="submitButton" onClick={onSend}>
            Send
          </button>
        </div>
      </div> */}
    </ContactContainer>
  );
};

export default Contact;
