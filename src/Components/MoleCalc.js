import React, { useState, useEffect } from 'react'
import '../Styling/Calculators.scss'
function MoleCalc() {
    const [inputs, setInputs] = useState({
        mass: "",
        moles: "",
        molecularWeight: ""
    });
    const [calculationsActive, setCalculationsActive] = useState(false);
    const { mass, moles, molecularWeight } = inputs;
    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };
    const molesResult = parseFloat(mass) / parseFloat(molecularWeight) || parseFloat(moles) || 0
    const massResult = parseFloat(molecularWeight) * parseFloat(moles) || parseFloat(mass) || 0
    const molecularWeightResult = parseFloat(mass) / parseFloat(moles) || parseFloat(molecularWeight) || 0

    return (
        <React.Fragment>
            <div className="molesCalcHeader">
                <h1 style={{ color: '#FCDEBE' }}>Moles Calculator</h1>
            </div>
            <div className="calculatorContainer">
                <form className="calculatorInputs">
                    <input
                        style={{ height: 45 }}
                        name="mass"
                        value={mass}
                        placeholder="Enter the mass"
                        onChange={e => onChange(e)}
                        maxLength="15"
                    />
                    <input
                        style={{ height: 45 }}
                        name="moles"
                        value={moles}
                        placeholder="Enter the moles"
                        onChange={e => onChange(e)}
                        maxLength="15"
                    />
                    <input
                        style={{ height: 45 }}
                        name="molecularWeight"
                        value={molecularWeight}
                        placeholder="Enter the Molecular Weight"
                        onChange={e => onChange(e)}
                        maxLength="15"
                    />
                </form>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                    height: 150
                }}
                    className="resultsContainer">
                    <div>Mass: {massResult} grams</div>
                    <div>Moles: {molesResult} moles</div>
                    <div>Molecular Weight: {molecularWeightResult} g/mol</div>
                </div>
                {calculationsActive &&
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 300,
                        maxWidth: 300,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        height: 150,
                        color: '#FCDEBE',
                        border: '1px solid #D4D2A5',
                        marginBottom: 15,
                        marginTop: 15,
                        borderRadius: 15,
                        overflowX: 'hidden',
                        flexWrap: 'wrap'
                    }} className="calculationsContainer">
                        <div className="molesLeftSide">{molesResult} <span style={{ color: '#D4D2A5' }}>moles</span></div>
                        <div>=</div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                            className="calculationsRightSide">
                            <div className="massTopRight">{massResult} <span style={{ color: '#D4D2A5' }}>grams</span></div>
                            <hr style={{ width: 125 }} />
                            <div className="molecularWeightBottomRight">{molecularWeightResult} <span style={{ color: '#D4D2A5' }}>g/mol</span> </div>
                        </div>

                    </div>}
            </div>
            <div
                style={{ marginTop: 15 }}
                className="calculationsButtonContainer">
                {!calculationsActive ?
                    <button
                        onClick={() => setCalculationsActive(true)}
                        style={{ width: 200, color: '#5E5768' }}
                        className="calculationsButton">Want to see the calculations?</button>
                    :
                    <button
                        onClick={() => setCalculationsActive(false)}
                        style={{ width: 200, color: '#5E5768' }}
                        className="calculationsButton">Close</button>}
            </div>

        </React.Fragment>
    )
}

export default MoleCalc
