import React from 'react'
import './registerForm.css'

function RegisterForm() {
  return (
    <div className='right col-sm-12 col-md-12 col-lg-6'>
      <h4>Welcome to our eVoting platform's registration form</h4>
      <form>
        <div className='row row-fields row-1'>
          <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
            <input name='f_name' type='text' placeholder='First Name'></input>
          </div>

          <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
            <input name='l_name' type='text' placeholder='Last Name'></input>
          </div>

          <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
            <input name='email' type='email' placeholder='Email'></input>
          </div>

          <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
            <input
              name='password'
              type='password'
              placeholder='Password'
            ></input>
          </div>

          <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
            <label for='gender'>Gender:</label>
            <br></br>
            <select name='gender' id='gender'>
              <option value='female'>--Choose your gender--</option>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
            </select>
          </div>

          <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
            <label for='bDay'>Birthday</label>
            <br></br>
            <input name='dateofbirth' type='date'></input>
          </div>

          <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
            <label for='gender'>You are registering as:</label>
            <br></br>
            <select name='role' id='role'>
              <option value='role'>--Choose your role--</option>
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
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
