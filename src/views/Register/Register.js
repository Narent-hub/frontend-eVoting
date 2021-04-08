import React from 'react'
import './Register.scss'
import RegisterForm from '../../components/registerForm/registerForm'
import voting from './voting-proxy-evoting.jpg'

function Register() {
  return (
    <div className='container-md'>
      <div className='row'>
        <div className='left col-sm-12 col-md-12 col-lg-6'>
          <h3>One step ahead of eVoting/create poll</h3>
          <img src={voting} alt='voting img'></img>

          <h5>
            Mention: <br></br> Your credentials remain private to us!
          </h5>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
