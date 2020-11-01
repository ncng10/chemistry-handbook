import React from 'react'
import '../Styling/ElementCard.scss'

function ElementProperties(props) {
    return (
        <React.Fragment>
            <div className="propertiesContainer">
                <div className="propertiesLeft">
                    <ul>
                        <li>Atomic Mass</li>
                        <li>Atomic Number</li>
                        <li>Electronegativity</li>
                        <li>Metal?:</li>
                        <li>Metalloid?:</li>
                        <li>Natural?:</li>
                        <li>Non-Metal?:</li>
                    </ul>
                </div>
                <div className="propertiesRight">
                    <ul>
                        <li># of Electrons:</li>
                        <li># of Neutrons:</li>
                        <li># of Protons:</li>
                        <li># of Shells:</li>
                        <li>Radioactive?:</li>
                        <li>Year Discovered:</li>
                        <li>Discoverer:</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ElementProperties
