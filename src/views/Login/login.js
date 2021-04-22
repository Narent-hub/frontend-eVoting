import React, { Component } from 'react'
// import { useHistory } from 'react-router-dom'
import loginImg from './login.svg'
import './login.scss'
import axios from 'axios'

// async function login(email, password) {
//   let item = { email, password }
//   let result = await fetch('http://localhost:8000/api/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify(item),
//   })
//   result = await result.json()
//   localStorage.setItem('user-info', JSON.stringify(result))
//   this.props.history.push('/add')
// }

class Login extends Component {
  handleChange(ee) {
    // const { name, value } = ee.target
    // this.setState({ [name]: value })
    //   const { name, value } = ee.target
    this.setState({ [ee.target.name]: ee.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    const { email, password } = this.state
    console.log('Narent', email)
    axios
      .post(
        '/api/login',
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response)
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data)
        }
      })
      .catch((error) => {
        console.log('login error', error)
      })
  }

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loginErrors: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    console.log(this)
  }

  render() {
    return (
      <form>
        <div className='base-container'>
          <div className='header'>LOGIN</div>
          <div className='content'>
            <div className='image'>
              <img src={loginImg} alt='' />
            </div>
            <div className='form'>
              <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input
                  type='name'
                  placeholder='Username'
                  value={this.state.email}
                  name='email'
                  onChange={this.handleChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className='footer'>
            <button onClick={this.handleSubmit} type='submit' className='btn'>
              Login
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default Login
