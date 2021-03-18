import React from 'react'
import './Register.css'
import RegisterForm from '../../components/registerForm/registerForm'

function Register() {
  return (
    <div className='container-md'>
      <div className='row'>
        <div className='left col-sm-12 col-md-12 col-lg-6'>
          <h5>
            If you want to use our eVoting platform, all you need to do is to
            fill the fields required to the right section of this page
          </h5>
          <h5>
            Mention: <br></br> Your credentials remain private to us!
          </h5>
          <img src='./views/Register/voting-proxy-evoting.jpg' alt=''></img>
        </div>
        <div className='right col-sm-12 col-md-12 col-lg-6'>
          <h4>Welcome to our eVoting platform's registration form</h4>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default Register
