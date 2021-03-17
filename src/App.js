import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css'
import RegisterForm from './components/registerForm/registerForm'

function App() {
  return (
    <BrowserRouter>
      <div className='row'>
        <Header />
      </div>

      <Route exact path='/register' component={RegisterForm} />

      {/* <div className='left col-sm-12 col-md-12 col-lg-6'>
            <h5>
              If you want to use our eVoting platform, all you need to do is to
              fill the fields required to the right section of this page
            </h5>
            <h5>
              Mention: <br></br> Your credentials remain private to us!
            </h5>
            <img src='./views/Register/voting-proxy-evoting.jpg' alt=''></img>
          </div>
          <RegisterForm /> */}

      <div className='row'>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
