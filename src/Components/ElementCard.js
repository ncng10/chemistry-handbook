import React, { useState } from 'react'
import '../Styling/ElementCard.scss'
import ElementProperties from './ElementProperties'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaElementor } from 'react-icons/fa'
import { IconContext } from 'react-icons'
function ElementCard(props) {
    const [front, setFrontActive] = useState(true);
    const {
        AtomicNumber, Symbol,
        ElementName, AtomicMass,
        Electronegativity, Metal,
        Metalloid, Natural, Nonmetal,
        NumberofElectrons, NumberofNeutrons,
        NumberofProtons, NumberofShells,
        Radioactive, Year, Discoverer, Type,
        AtomicRadius, Density, BoilingPoint, MeltingPoint,
        Period, FirstIonization, SpecificHeat
    } = props;
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
                <div className={front ? "elementContainer" : "elementProperties"}>
                    <IconContext.Provider value={{ size: 25 }}>
                        <div onClick={handleProperties} className="infoButton"><AiOutlineInfoCircle /></div>
                    </IconContext.Provider>
                    <div className="atomicNumber">{AtomicNumber}</div>
                    <div className="symbol"><h1>{Symbol}</h1></div>
                    <div className="lowerInfo">
                        <span>{ElementName}</span>
                        <span>{AtomicMass}</span>
                    </div>
                </div>}
            {!front &&
                <div className={!front ? "elementProperties" : "elementContainer"} >
                    <div className="elementTitle"><h1>{ElementName}</h1></div>
                    <IconContext.Provider value={{ size: 25 }}>
                        <div onClick={handleProperties} className="elementButton"><FaElementor /></div>
                    </IconContext.Provider>
                    <div className="propertiesLeft">
                        <ul>
                            <li><span>Atomic Mass</span>: {AtomicMass}</li>
                            <li><span>Atomic Number</span>: {AtomicNumber}</li>
                            <li><span>Electronegativity</span>: {Electronegativity}</li>
                            <li><span>Metal</span>: {Metal}</li>
                            <li><span>Metalloid</span>: {Metalloid}</li>
                            <li><span>Natural</span>: {Natural}</li>
                            <li><span>Non-Metal</span>: {Nonmetal}</li>
                            <li><span>Density</span>: {Density}</li>
                        </ul>
                    </div>
                    <div className="propertiesRight">
                        <ul>
                            <li><span># of Electrons</span>: {NumberofElectrons}</li>
                            <li><span># of Neutrons</span>: {NumberofNeutrons}</li>
                            <li><span># of Protons</span>: {NumberofProtons}</li>
                            <li><span># of Shells</span>: {NumberofShells}</li>
                            <li><span>Radioactive</span>: {Radioactive}</li>
                            <li><span>Atomic Radius</span>: {AtomicRadius}</li>
                            <li><span>Boiling Point</span>: {BoilingPoint}</li>
                            <li><span>Melting Point</span>: {MeltingPoint}</li>
                        </ul>
                    </div>
                </div>

            }
            <div className="extraInfo">
                <ul>
                    <li><span>Year Discovered</span>: {Year}</li>
                    <li style={{ marginTop: 10 }}><span>Discoverer</span>: {Discoverer}</li>
                    <li style={{ marginTop: 10 }}><span>Type</span>: {Type}</li>
                </ul>
                <ul>
                    <li><span>First Ionization:</span>{FirstIonization}</li>
                    <li style={{ marginTop: 10 }}><span>Specific Heat:</span>{SpecificHeat}</li>
                    <li style={{ marginTop: 10 }}><span>Period:</span>{Period}</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default ElementCard
