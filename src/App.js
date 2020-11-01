import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
import './App.css';
import ElementCard from './Components/ElementCard';
import { RiSearchEyeFill } from 'react-icons/ri'
function App() {
  const [inputs, setInputs] = useState({
    nameOfElement: "",
    symbol: ""
  })
  const { nameOfElement, symbol } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const [element, setElement] = useState('')

  function getElement() {
    fetch(`https://periodic-table-of-elements.p.rapidapi.com/element/name/${nameOfElement}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "periodic-table-of-elements.p.rapidapi.com",
        "x-rapidapi-key": "4327907d8cmshf9dfbf382f6e880p1f5c32jsn32d31187752c"
      }
    }).then(res => res.json())
      .then(data => setElement(data))
    console.log(element)
  }

  return (
    <div className="App">
      <div className="searchBar">
        <input
          placeholder="Search by Name"
          name="nameOfElement"
          value={nameOfElement}
          onChange={e => onChange(e)} />
        <center><button onClick={getElement}>Search</button></center>

        <div>
        </div>
      </div>
      {element &&
        <ElementCard
          AtomicNumber={element.AtomicNumber}
          Symbol={element.Symbol}
          ElementName={element.Element}
          AtomicMass={element.AtomicMass}
          Electronegativity={element.Electronegativity}
          Metal={element.Metal}
          Metalloid={element.Metalloid}
          Natural={element.Natural}
          Nonmetal={element.Nonmetal}
          NumberofElectrons={element.NumberofElectrons}
          NumberofNeutrons={element.NumberofNeutrons}
          NumberofProtons={element.NumberofProtons}
          NumberofShells={element.NumberofShells}
          Radioactive={element.Radioactive}
          Year={element.Year}
          Discoverer={element.Discoverer}
        />
      }
    </div>
  )
}

export default App
