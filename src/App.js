import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Register from './views/Register/Register'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Register} />
      </BrowserRouter>
    )
  }
}

export default App
