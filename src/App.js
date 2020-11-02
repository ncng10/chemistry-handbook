import React from 'react'
import PeriodicTableSearch from './PeriodicTableSearch'
import './App.css'
import NavBar from './Components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  BrowserRouter
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/periodic' component={PeriodicTableSearch} />
          <Route exact path='/organic' />
          <Route exact path='calculators' />
        </Switch>
        <NavBar />
      </Router>
    </div>
  )
}

export default App
