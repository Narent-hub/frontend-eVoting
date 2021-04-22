import React, { Component } from 'react'
import axios from 'axios'
import './MyAccount.scss'

// const handleLogoutClick = () => {
//   axios
//     .delete('http://127.0.0.1:8000/api/auth/logout', { withCredentials: true })
//     .then((response) => {
//       this.props.handleLogout()
//     })
//     .catch((error) => {
//       console.log('logout error', error)
//     })
// }

class MyAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      f_name: '',
      l_name: '',
      email: '',
      gender: '',
      birthday: '',
      user_privilege: '',
      role: '',
    }
  }

  handleSubmit = () => {
    axios
      .get('/registeredusers', {
        params: {
          f_name: this.state.f_name,
          l_name: this.state.l_name,
          email: this.state.email,
          gender: this.state.gender,
          birthday: this.state.birthday,
          user_privilege: this.state.user_privilege,
          role: this.state.role,
        },
      })
      .then(function (response) {
        console.log(response)
      })
  }

  render() {
    return (
      <div className='main'>
        <h1>Account Information details</h1>
        <div className='formWrap'>
          <form>
            <div className='row row-fields row-2'>
              <div className='formInput1 mobile-col col-sm-12 col-md-6 col-lg-12'>
                <input
                  name='f_name'
                  type='text'
                  placeholder='First Name'
                  onChange={this.handleChange}
                  value={this.state.f_name}
                ></input>
              </div>

              <div className='formInput1 mobile-col col-sm-12 col-md-6 col-lg-12'>
                <input
                  name='l_name'
                  type='text'
                  placeholder='Last Name'
                  onChange={this.handleChange}
                  value={this.state.l_name}
                ></input>
              </div>

              <div className='formInput1 mobile-col col-sm-12 col-md-6 col-lg-12'>
                <input
                  name='email'
                  type='email'
                  placeholder='Email'
                  onChange={this.handleChange}
                  value={this.state.email}
                ></input>
              </div>

              <div className='formInput1 mobile-col col-sm-12 col-md-6 col-lg-12'>
                <select
                  name='gender'
                  id='genderInfo'
                  onChange={this.handleChange}
                  defaultValue='Select Gender'
                >
                  <option defaultValue>Choose your gender</option>
                  <option value='female'>Female</option>
                  <option value='male'>Male</option>
                </select>
              </div>

              <div className='formInput1 mobile-col col-sm-12 col-md-6 col-lg-12'>
                <input
                  name='birthday'
                  type='date'
                  onChange={this.handleChange}
                  value={this.state.birthday}
                ></input>
              </div>

              <div className='formInput1 mobile-col col-sm-12 col-md-6 col-lg-12'>
                <select
                  name='role'
                  id='roleInfo'
                  onChange={this.handleChange}
                  defaultValue='Select Role'
                >
                  <option defaultValue>Choose your role</option>
                  <option value='Voter'>Admin</option>
                  <option value='Creator'>User</option>
                </select>
              </div>
              <div className='formInput1 mobile-col col-sm-12 col-md-6 col-lg-12'>
                <select
                  name='user_privilege'
                  id='typeInfo'
                  onChange={this.handleChange}
                  defaultValue='Select your type'
                >
                  <option defaultValue>Choose your type</option>
                  <option value='Voter'>Creator/Organizer</option>
                  <option value='Creator'>Voter/Participant</option>
                </select>
              </div>
              <button
                type='submit'
                label='send'
                className='btn submit-btn btn-outline-dark btn pseudoBtn'
              >
                Submit
              </button>

              {/* <button
                onClick={this.handleLogoutClick}
                type='submit'
                label='Logout'
                className='btn submit-btn btn-outline-dark btn pseudoBtn'
              >
                Logout
              </button> */}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default MyAccount
