import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import Error from '../Error/Error'
import './registerForm.css'

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
})

class RegisterForm extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: '',
      birthdate: '',
      role: '',
    }
  }

  componentDidMount() {
    axios
      .post('/http://127.0.0.1:8000/api/user', this.state)
      .then((response) => {
        return console.log(response)
      })
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
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              resetForm()
              setSubmitting(false)
            }, 500)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className='row row-fields row-1'>
                <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
                  <input
                    name='f_name'
                    type='text'
                    placeholder='First Name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.f_name}
                    className={
                      touched.f_name && errors.f_name ? 'has-error' : null
                    }
                  ></input>
                  <Error touched={touched.f_name} message={errors.f_name} />
                </div>

                <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
                  <input
                    name='l_name'
                    type='text'
                    placeholder='Last Name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.l_name}
                    className={
                      touched.l_name && errors.l_name ? 'has-error' : null
                    }
                  ></input>
                  <Error touched={touched.l_name} message={errors.l_name} />
                </div>

                <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
                  <input
                    name='email'
                    type='email'
                    placeholder='Email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={
                      touched.email && errors.email ? 'has-error' : null
                    }
                  ></input>
                  <Error touched={touched.email} message={errors.email} />
                </div>

                <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
                  <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={
                      touched.password && errors.password ? 'has-error' : null
                    }
                  ></input>
                  <Error touched={touched.password} message={errors.password} />
                </div>

                <div className='formInput form-group mobile-col col-sm-12 col-md-6 col-lg-12'>
                  <label for='gender'>Gender:</label>
                  <br></br>
                  <select name='gender' id='gender' required>
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
                  <select name='role' id='role' required>
                    <option value='role'>--Choose your role--</option>
                    <option value='Voter'>Creator/Organizer</option>
                    <option value='Creator'>Voter/Participant</option>
                  </select>
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
