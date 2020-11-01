import React, { useState } from 'react'
import '../Styling/ElementCard.scss'
import ElementProperties from './ElementProperties'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaElementor } from 'react-icons/fa'
import { IconContext } from 'react-icons'
function ElementCard(props) {
    const [front, setFrontActive] = useState(true);

    const handleProperties = () => {
        if (front) {
            setFrontActive(false)
        } if (!front) {
            setFrontActive(true)
        }
    }

    return (
        <React.Fragment>
            {front &&
                <div className={front ? "elementContainer" : null}>
                    <IconContext.Provider value={{ size: 25 }}>
                        <div onClick={handleProperties} className="infoButton"><AiOutlineInfoCircle /></div>
                    </IconContext.Provider>
                    <div className="atomicNumber">{props.AtomicNumber}</div>
                    <div className="symbol"><h1>{props.Symbol}</h1></div>
                    <div className="lowerInfo">
                        <span>{props.ElementName}</span>
                        <span>{props.AtomicMass}</span>
                    </div>
                </div>}
            {!front &&
                <div className={!front ? "elementProperties" : null} >
                    <div className="elementTitle"><h1>{props.ElementName}</h1></div>
                    <IconContext.Provider value={{ size: 25 }}>
                        <div onClick={handleProperties} className="elementButton"><FaElementor /></div>
                    </IconContext.Provider>
                    <div className="propertiesLeft">
                        <ul>
                            <li><span>Atomic Mass</span>: {props.AtomicMass}</li>
                            <li><span>Atomic Number</span>: {props.AtomicNumber}</li>
                            <li><span>Electronegativity</span>: {props.Electronegativity}</li>
                            <li><span>Metal?</span>: {props.Metal}</li>
                            <li><span>Metalloid?</span>: {props.Metalloid}</li>
                            <li><span>Natural?</span>: {props.Natural}</li>
                            <li><span>Non-Metal?</span>: {props.Nonmetal}</li>
                        </ul>
                    </div>
                    <div className="propertiesRight">
                        <ul>
                            <li><span># of Electrons</span>: {props.NumberofElectrons}</li>
                            <li><span># of Neutrons</span>: {props.NumberofNeutrons}</li>
                            <li><span># of Protons</span>: {props.NumberofProtons}</li>
                            <li><span># of Shells</span>: {props.NumberofShells}</li>
                            <li><span>Radioactive?</span>:{props.Radioactive}</li>
                            <li><span>Year Discovered</span>: {props.Year}</li>
                            <li><span>Discoverer</span>: {props.Discoverer}</li>
                        </ul>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default ElementCard
