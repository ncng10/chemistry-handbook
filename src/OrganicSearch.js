import React, { useState } from 'react'

function OrganicSearch() {
    const [inputs, setInputs] = useState({
        moleculeName: ""
    });
    const [image, setImage] = useState([])
    const [molecularWeight, setMolecularWeight] = useState([])
    const { moleculeName } = inputs;
    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };
    function getElement(e) {
        e.preventDefault()
        if (moleculeName === "") {
            alert('Please Enter a Molecule')
        } else {
            fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${moleculeName}/png`, {
                "method": "GET",
                "headers": {
                    "accept": "image/png"
                }
            }).then(res => setImage(res.url))
                .then(
                    fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${moleculeName}/property/MolecularWeight/JSON`, {
                        "method": "GET",
                        "headers": {
                            "accept": "application/json"
                        }
                    }).then(res => res.json())
                        .then(data => data.PropertyTable.Properties.forEach((weight) => {
                            setMolecularWeight(weight.MolecularWeight)
                        }))
                )
        }
    }
    return (
        <div className="organicSearchContainer">
            <form onSubmit={getElement} className="organicSearch">
                <input
                    name="moleculeName"
                    value={moleculeName}
                    onChange={e => onChange(e)}
                />
                <div>
                    <button
                        style={{ width: 200 }}
                        type="submit">Search
                    </button>
                </div>
            </form>
            <div>
                <img src={image} />
            </div>
            <div>{molecularWeight}</div>
        </div>
    )
}

export default OrganicSearch
