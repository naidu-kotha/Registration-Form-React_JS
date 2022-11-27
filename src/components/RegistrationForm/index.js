/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    lastNameError: false,
    firstNameError: false,
    isSubmitted: false,
  }

  onResetForm = () => {
    this.setState({isSubmitted: false})
  }

  validateFirstName = () => {
    const {firstname} = this.state

    return firstname !== ''
  }

  onBlurFirstName = () => {
    const isFirstNameValid = this.validateFirstName()

    this.setState({firstNameError: !isFirstNameValid})
  }

  validateLastName = () => {
    const {lastname} = this.state

    return lastname !== ''
  }

  onBlurLastName = () => {
    const isLastNameValid = this.validateLastName()

    this.setState({lastNameError: !isLastNameValid})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.onBlurLastName()
    this.onBlurFirstName()
    const {firstname, lastname} = this.state
    if (firstname !== '' && lastname !== '') {
      this.setState({
        firstname: '',
        lastname: '',
        isSubmitted: true,
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastname: event.target.value})
  }

  render() {
    const {
      firstname,
      lastname,
      firstNameError,
      lastNameError,
      isSubmitted,
    } = this.state
    // console.log(lastNameError)
    const msg = firstNameError ? 'Required' : ''
    const cssStyle = firstNameError ? 'blur' : ''
    const msg2 = lastNameError ? 'Required' : ''
    const cssStyle2 = lastNameError ? 'blur' : ''
    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          {isSubmitted ? (
            <div className="success-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-logo"
              />
              <p className="success-msg">Submitted Successfully</p>
              <button
                className="submit-btn-success"
                type="button"
                onClick={this.onResetForm}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <>
              <div className="inputs-container">
                <label className="names-heading" htmlFor="username">
                  FIRST NAME
                </label>
                <input
                  className={`input-box ${cssStyle}`}
                  id="username"
                  placeholder="First name"
                  onChange={this.onChangeFirstName}
                  onBlur={this.onBlurFirstName}
                  value={firstname}
                />
                <p className="msg-clr">{msg}</p>
              </div>
              <div className="inputs-container">
                <label className="names-heading" htmlFor="lastname">
                  LAST NAME
                </label>
                <input
                  className={`input-box ${cssStyle2}`}
                  id="lastname"
                  placeholder="Last name"
                  onChange={this.onChangeLastName}
                  onBlur={this.onBlurLastName}
                  value={lastname}
                />
                <p className="msg-clr">{msg2}</p>
              </div>
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </>
          )}
        </form>
      </div>
    )
  }
}

export default RegistrationForm
