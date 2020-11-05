import React from 'react'

function OrganicInfo(props) {
    const { MolecularFormula, MolecularWeight, image } = props;
    return (
        <React.Fragment>
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
                    Molecular Formula: {MolecularFormula}</div>
                <div style={{ marginTop: 15 }}>
                    Molecular Weight: {MolecularWeight} g/mol </div>
            </div>
        </React.Fragment>
    )
}

export default OrganicInfo
