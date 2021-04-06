import React, { Component } from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'

import Error from '../Error/Error'
import './registerForm.scss'

const validationSchema = Yup.object().shape({
  f_name: Yup.string()
    .min(1, 'Must have a character')
    .max(255, 'Must be shorter!')
    .required('First name is required'),
  l_name: Yup.string()
    .min(1, 'Must have a character')
    .max(255, 'Must be shorter!')
    .required('Last name is required'),
  email: Yup.string()
    .email('Must be a valid email address')
    .max(255, 'Must be shorter!')
    .required('Email is required'),
  password: Yup.string()
    .required('Must type a password')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  gender: Yup.string().required('This field is required'),
  birthday: Yup.string().required('This field is required'),
  role: Yup.string().required('This field is required'),
  type: Yup.string().required('This field is required'),
})

class RegisterForm extends Component {
  constructor() {
    super()
    this.state = {
      f_name: '',
      l_name: '',
      email: '',
      password: '',
      gender: '',
      birthday: '',
      role: '',
      type: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  firsthandler = (event) => {
    this.setState({
      f_name: event.target.value,
    })
  }

  lasthandler = (event) => {
    this.setState({
      l_name: event.target.value,
    })
  }

  emailhandler = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  genderhandler = (event) => {
    this.setState({
      gender: event.target.value,
    })
  }

  birthdayhandler = (event) => {
    this.setState({
      birthday: event.target.value,
    })
  }

  rolehandler = (event) => {
    this.setState({
      role: event.target.value,
    })
  }

  typehandler = (event) => {
    this.setState({
      type: event.target.value,
    })
  }

  handleSubmit = (event) => {
    axios
      .post('http://127.0.0.1:8000/api/registeredusers', this.state)
      .then((response) => {
        return console.log(response)
      })
    alert(`${this.state.f_name} ${this.state.l_name} Registered Successfully`)
    console.log(this.state)
    this.state({
      f_name: '',
      l_name: '',
      email: '',
      password: '',
      gender: '',
      birthday: '',
      role: '',
      type: '',
    })
    event.preventDefault()
  }

  render() {
    return (
      <div className='right col-sm-12 col-md-12 col-lg-6'>
        <h4>Welcome to our eVoting platform's registration form</h4>
        <Formik
          initialValues={{
            f_name: '',
            l_name: '',
            email: '',
            password: '',
            gender: '',
            birthday: '',
            role: '',
            type: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              resetForm()
              setSubmitting(true)
            }, 500)
          }}
        >
          {({ values, errors, touched, handleBlur, isSubmitting }) => (
            <form onSubmit={this.handleSubmit}>
              <div className='row row-fields row-1'>
                <div className='formInput mobile-col col-sm-12 col-md-6 col-lg-12'>
                  <input
                    name='f_name'
                    type='text'
                    placeholder='First Name'
                    onChange={this.firsthandler}
                    onBlur={handleBlur}
                    value={this.state.f_name}
                    className={
                      touched.f_name && errors.f_name ? 'has-error' : null
                    }
                  ></input>
                  <Error touched={touched.f_name} message={errors.f_name} />
                </div>

                <div className='formInput mobile-col col-sm-12 col-md-6 col-lg-12'>
                  <input
                    name='l_name'
                    type='text'
                    placeholder='Last Name'
                    onChange={this.lasthandler}
                    onBlur={handleBlur}
                    value={this.state.l_name}
                    className={
                      touched.l_name && errors.l_name ? 'has-error' : null
                    }
                  ></input>
                  <Error touched={touched.l_name} message={errors.l_name} />
                </div>

                <div className='formInput mobile-col col-sm-12 col-md-6 col-lg-12'>
                  <input
                    name='email'
                    type='email'
                    placeholder='Email'
                    onChange={this.emailhandler}
                    onBlur={handleBlur}
                    value={this.state.email}
                    className={
                      touched.email && errors.email ? 'has-error' : null
                    }
                  ></input>
                  <Error touched={touched.email} message={errors.email} />
                </div>

                <div className='formInput mobile-col col-sm-12 col-md-6 col-lg-12'>
                  <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={this.passwordhandler}
                    onBlur={handleBlur}
                    value={this.state.password}
                    className={
                      touched.password && errors.password ? 'has-error' : null
                    }
                  ></input>
                  <Error touched={touched.password} message={errors.password} />
                </div>

                <div className='formInput mobile-col col-sm-12 col-md-6 col-lg-12'>
                  {/* <label>Gender:</label> */}
                  <br></br>
                  <select
                    name='gender'
                    id='gender'
                    value={values.gender}
                    onChange={this.genderhandler}
                    defaultValue='Select Gender'
                    onBlur={handleBlur}
                    className={
                      touched.gender && errors.gender ? 'has-error' : null
                    }
                  >
                    <option defaultValue>Choose your gender</option>
                    <option value='female'>Female</option>
                    <option value='male'>Male</option>
                  </select>
                  <Error touched={touched.gender} message={errors.gender} />
                </div>

                <div className='formInput mobile-col col-sm-12 col-md-6 col-lg-12'>
                  <label>Birthday</label>
                  <br></br>
                  <input
                    name='birthday'
                    type='date'
                    onChange={this.birthdayhandler}
                    onBlur={handleBlur}
                    value={this.state.birthday}
                    className={
                      touched.birthday && errors.birthday ? 'has-error' : null
                    }
                  ></input>
                  <Error touched={touched.birthday} message={errors.birthday} />
                </div>

                <div className='formInput mobile-col col-sm-12 col-md-6 col-lg-12'>
                  {/* <label>You are a:</label> */}
                  <br></br>
                  <select
                    name='role'
                    id='role'
                    value={values.role}
                    onChange={this.rolehandler}
                    defaultValue='Select Role'
                    onBlur={handleBlur}
                    className={touched.role && errors.role ? 'has-error' : null}
                  >
                    <option defaultValue>Choose your role</option>
                    <option value='Voter'>Admin</option>
                    <option value='Creator'>User</option>
                  </select>
                  <Error touched={touched.role} message={errors.role} />
                </div>
                <div className='formInput mobile-col col-sm-12 col-md-6 col-lg-12'>
                  {/* <label>You are registering as:</label> */}
                  <br></br>
                  <select
                    name='type'
                    id='type'
                    value={values.type}
                    onChange={this.typehandler}
                    defaultValue='Select your type'
                    onBlur={handleBlur}
                    className={touched.type && errors.type ? 'has-error' : null}
                  >
                    <option defaultValue>--Choose your role--</option>
                    <option value='Voter'>Creator/Organizer</option>
                    <option value='Creator'>Voter/Participant</option>
                  </select>
                  <Error touched={touched.type} message={errors.type} />
                </div>
                <button
                  type='submit'
                  label='send'
                  className='btn submit-btn btn-outline-dark btn pseudoBtn'
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    )
  }
}

export default RegisterForm
