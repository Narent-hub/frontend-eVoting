import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './views/Home/Home'
import Services from './views/Services/Services'
import Products from './views/Products/Products'
import SignUp from './views/SignUp/SignUp'
import Register from './views/Register/Register'
import Organizer from './views/Organizer/Organizer'
import Login from './views/Login/login'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/login' exact component={Login} /> */}
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/signup' component={SignUp} />
          <Route path='/register' component={Register} />
          <Route path='/organizer' component={Organizer} />
          <Route path='/login' component={Login} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
