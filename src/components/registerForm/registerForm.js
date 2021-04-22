import React, { Component } from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'

import Error from '../Error/Error'
import './registerForm.scss'

const validationSchema = Yup.object().shape({
  name: Yup.string()
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
  password_confirmation: Yup.string()
    .required('Must type a password')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  gender: Yup.string().required('This field is required'),
  birthday: Yup.string().required('This field is required'),
  role: Yup.string().required('This field is required'),
  user_privilege: Yup.string().required('This field is required'),
})

class RegisterForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      gender: '',
      birthday: '',
      user_privilege: '',
      role: '',
    }
  }

  render() {
    return (
      <div className='right col-sm-12 col-md-12 col-lg-6'>
        <h4>Welcome to our eVoting platform's registration form</h4>
        <Formik
          initialValues={{
            name: '',
            email: '',
            gender: '',
            birthday: '',
            password: '',
            password_confirmation: '',
            user_privilege: '',
            role: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            console.log(values)
            setTimeout(() => {
              axios
                .post('http://127.0.0.1:8000/api/register', {
                  name: values.name,
                  email: values.email,
                  gender: values.gender,
                  birthday: values.birthday,
                  user_privilege: values.user_privilege,
                  role: values.role,
                  password: values.password,
                  password_confirmation: values.password_confirmation,
                })
                .then((response) => {
                  console.log(response)
                })
              resetForm()
              setSubmitting(false)
              alert(`${values.name} Registered Successfully !!!!`)
            }, 500)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className='row row-fields row-1'>
                <div className='formInput mobile-col col-sm-12 col-md-6 col-lg-12'>
                  <input
                    name='name'
                    type='text'
                    placeholder='Full Name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={touched.name && errors.name ? 'has-error' : null}
                  ></input>
                  <Error touched={touched.name} message={errors.name} />
                </div>

                <div className='formInput mobile-col col-sm-12 col-md-6 col-lg-12'>
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

                <div className='formInput mobile-col col-sm-12 col-md-6 col-lg-12'>
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

                <div className='formInput mobile-col col-sm-12 col-md-6 col-lg-12'>
                  <input
                    name='password_confirmation'
                    type='password'
                    placeholder='Confirm Password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password_confirmation}
                    className={
                      touched.password_confirmation &&
                      errors.password_confirmation
                        ? 'has-error'
                        : null
                    }
                  ></input>
                  <Error
                    touched={touched.password_confirmation}
                    message={errors.password_confirmation}
                  />
                </div>

                <div className='formInput mobile-col col-sm-12 col-md-6 col-lg-12'>
                  <select
                    name='gender'
                    id='gender'
                    onChange={handleChange}
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
                  <input
                    name='birthday'
                    type='date'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.birthday}
                    className={
                      touched.birthday && errors.birthday ? 'has-error' : null
                    }
                  ></input>
                  <br></br>
                  <label>Birthday</label>
                  <Error touched={touched.birthday} message={errors.birthday} />
                </div>

                <div className='formInput mobile-col col-sm-12 col-md-6 col-lg-12'>
                  <select
                    name='role'
                    id='role'
                    onChange={handleChange}
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
                  <select
                    name='user_privilege'
                    id='type'
                    onChange={handleChange}
                    defaultValue='Select your type'
                    onBlur={handleBlur}
                    className={
                      touched.user_privilege && errors.user_privilege
                        ? 'has-error'
                        : null
                    }
                  >
                    <option defaultValue>Choose your type</option>
                    <option value='Voter'>Creator/Organizer</option>
                    <option value='Creator'>Voter/Participant</option>
                  </select>
                  <Error
                    touched={touched.user_privilege}
                    message={errors.typuser_privilegee}
                  />
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
