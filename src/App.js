import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer'
import Services from './components/pages/Services/Services'

const App = () => {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
        </Switch>
        <Footer />
    </Router>
  )
}

export default App
