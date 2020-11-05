import React, { useState } from 'react'
import { ImCheckmark } from 'react-icons/im';
function OrganicSearch() {
    const [inputs, setInputs] = useState({
        moleculeName: ""
    });
    const [image, setImage] = useState([]);
    const [molecularInfo, setMolecularInfo] = useState([]);
    const { moleculeName } = inputs;
    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
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
                    fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${moleculeName}/property/MolecularWeight,MolecularFormula/JSON`, {
                        "method": "GET",
                        "headers": {
                            "accept": "application/json"
                        }
                    }).then(res => res.json())
                        .then(data => data.PropertyTable.Properties.forEach((info) => {
                            setMolecularInfo(info)
                        }))
                )
        }
    };
    return (
        <div className="organicSearchContainer">
            <form onSubmit={getElement} className="organicSearch">
                <div className="searchBar">
                    <input
                        placeholder="Search by Name"
                        name="moleculeName"
                        value={moleculeName}
                        onChange={e => onChange(e)} />
                    <button type="submit"><ImCheckmark /></button>
                    <div>
                    </div>
                </div>
            </form>
            <div>
                <img
                    style={{
                        marginTop: 50,
                        width: 350,
                        height: 300,
                        borderRadius: 15,
                        border: 'none'
                    }}
                    src={image} />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 350,
                    height: 125,
                    backgroundColor: "#5E5768",
                    borderRadius: 10,
                    color: '#FCDEBE'
                }}
                className="molecularInfoContainer">
                <div>
                    Molecular Formula: {molecularInfo.MolecularFormula}</div>
                <div style={{ marginTop: 15 }}>
                    Molecular Weight: {molecularInfo.MolecularWeight} g/mol </div>
            </div>
        </div>
    )
}

export default OrganicSearch
