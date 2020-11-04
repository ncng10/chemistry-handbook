import React, { useState, useEffect } from 'react'
import '../Styling/Calculators.scss'
function MoleCalc() {
    const [inputs, setInputs] = useState({
        mass: "",
        moles: "",
        molecularWeight: ""
    });
    const { mass, moles, molecularWeight } = inputs;
    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };

    const molesResult = mass / molecularWeight;
    const massResult = molecularWeight * moles;
    const molecularWeightResult = mass / moles
    return (
        <React.Fragment>
            <div className="molesCalcHeader">
                <h1 style={{ color: '#FCDEBE' }}>Moles Calculator</h1>
            </div>
            <div className="calculatorContainer">
                <form className="calculatorInputs">
                    <input
                        name="mass"
                        value={mass}
                        placeholder="Enter the mass"
                        onChange={e => onChange(e)}
                    />
                    <input
                        name="moles"
                        value={moles}
                        placeholder="Enter the moles"
                        onChange={e => onChange(e)}
                    />
                    <input
                        name="molecularWeight"
                        value={molecularWeight}
                        placeholder="Enter the Molecular Weight"
                        onChange={e => onChange(e)}
                    />
                </form>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white"
                }}
                    className="resultsContainer">
                    <div>Mass: {massResult}</div>
                    <div>Moles: {molesResult}</div>
                    <div>Molecular Weight: {molecularWeightResult} </div>


                </div>
            </div>
        </React.Fragment>
    )
}

export default MoleCalc
