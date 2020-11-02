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
          <Route path={process.env.PUBLIC_URL + '/periodic'} component={PeriodicTableSearch} />
          <Route path={process.env.PUBLIC_URL + '/organic'} />
          <Route path={process.env.PUBLIC_URL + '/calculators'} />
        </Switch>
        <NavBar />
      </Router>
    </div>
  )
}

export default App
