import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Organizer from './views/Organizer/Organizer'
import Register from './views/Register/Register'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/organizer' component={Organizer} />
        <Route exact path='/register' component={Register} />
      </BrowserRouter>
    )
  }
}

export default App
