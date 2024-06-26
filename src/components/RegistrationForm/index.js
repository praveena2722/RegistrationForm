import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    fnameError: false,
    lnameError: false,
    isFormSubmitted: false,
  }

  onBlurFirstname = () => {
    const {firstname} = this.state
    const checkFn = firstname !== ''
    this.setState({fnameError: !checkFn})
  }

  onBlurLastname = () => {
    const {lastname} = this.state
    const checkLn = lastname !== ''
    this.setState({lnameError: !checkLn})
  }

  onFirstnameUpdate = event => {
    this.setState({firstname: event.target.value})
  }

  onLastnameUpdate = event => {
    this.setState({lastname: event.target.value})
  }

  onSubmittingForm = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname !== '' && lastname !== '') {
      this.setState({isFormSubmitted: true})
    } else {
      const validFn = firstname !== ''
      const validLn = lastname !== ''
      this.setState({
        isFormSubmitted: false,
        fnameError: !validFn,
        lnameError: !validLn,
      })
    }
  }

  onClickAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstname: '',
      lastname: '',
    }))
  }

  onSuccessfulSubmit = () => (
    <>
      <div className="success_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success_img"
        />
        <p className="submit_heading">Submitted Successfully</p>
        <button
          type="button"
          className="submit_btn"
          onClick={this.onClickAnotherResponse}
        >
          Submit Another Respoonse
        </button>
      </div>
    </>
  )

  registration = () => {
    const {firstname, lastname, fnameError, lnameError} = this.state
    return (
      <>
        <form className="form_container" onSubmit={this.onSubmittingForm}>
          <label htmlFor="firstname" className="label_text">
            FIRST NAME
          </label>
          <input
            type="text"
            className="input_text"
            id="firstname"
            value={firstname}
            onBlur={this.onBlurFirstname}
            onChange={this.onFirstnameUpdate}
            placeholder="First name"
          />
          {fnameError ? <p className="error_msg">Required</p> : ''}
          <label htmlFor="lastname" className="label_text">
            LAST NAME
          </label>
          <input
            type="text"
            className="input_text"
            id="lastname"
            value={lastname}
            onBlur={this.onBlurLastname}
            onChange={this.onLastnameUpdate}
            placeholder="Last name"
          />
          {lnameError ? <p className="error_msg">Required</p> : ''}
          <button type="submit" className="submit_btn">
            Submit
          </button>
        </form>
      </>
    )
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="app_container">
        <h1 className="heading">Registration</h1>
        {isFormSubmitted ? this.onSuccessfulSubmit() : this.registration()}
      </div>
    )
  }
}
export default RegistrationForm
