import React, { useState } from 'react'
import { ImCheckmark } from 'react-icons/im';
import OrganicInfo from './Components/OrganicInfo';
function OrganicSearch() {
    const [inputs, setInputs] = useState({
        moleculeName: ""
    });
    const [image, setImage] = useState([]);
    const [molecularInfo, setMolecularInfo] = useState([]);
    const [result, setResult] = useState(false);
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
                            setResult(true)
                        }))
                )
        }
    };
    return (
        <div className="organicSearchContainer">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    fontSize: 25,
                    color: '#FCDEBE'

                }}
            ><h3>Organic Molecule Search</h3></div>
            <form onSubmit={getElement} className="organicSearch">
                <div
                    style={{ marginTop: 0 }}
                    className="searchBar">
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
            {result &&
                <OrganicInfo
                    MolecularWeight={molecularInfo.MolecularWeight}
                    MolecularFormula={molecularInfo.MolecularFormula}
                    image={image}
                />}
        </div>
    )
}

export default OrganicSearch
