import React, { useEffect, useState } from 'react';
import {useHistory}from 'react-router-dom';
import loginImg from './login.svg';
import './login.scss';

async function login(email, password) {
  let item = { email, password }
  let result = await fetch('http://localhost:8000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(item),
  })
  result = await result.json()
  localStorage.setItem('user-info', JSON.stringify(result))
  this.props.history.push('/add')
}

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push('/add')
    }
  }, [])

  return (
    <form>
      <div className='base-container'>
        <div className='header'>LOGIN</div>
        <div className='content'>
          <div className='image'>
            <img src={loginImg} />
          </div>
          <div className='form'>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input
                type='name'
                placeholder='Username'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='footer'>
          <button
            onClick={login(email, password)}
            type='submit'
            className='btn'
          >
            Login
          </button>
        </div>
      </div>
    </form>
  )
}

export default Login
