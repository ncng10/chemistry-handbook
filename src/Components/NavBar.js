import React from 'react'
import '../Styling/NavBar.scss';
import { FaCalculator } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { DiAtom } from 'react-icons/di';
import { GiMolecule } from 'react-icons/gi';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
} from "react-router-dom";
function NavBar() {
    return (
        <div className="navBarContainer">
            <div style={{
                position: "fixed",
                width: "100%",
                bottom: -20,
            }}
                className="navBar">
                <ul style={{
                    backgroundColor: '#3A445D',
                    height: 60,
                    width: 200,
                    zIndex: 10,
                    listStyleType: "none",
                    alignItems: 'center',
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    width: "100%",
                }}>
                    <li style={{ marginLeft: -85 }} >
                        <IconContext.Provider value={{ size: 25, color: '#FCDEBE' }}>
                            <div><FaCalculator /></div>
                        </IconContext.Provider>
                    </li>
                    <li >
                        <IconContext.Provider value={{ size: 25, color: '#FCDEBE' }}>
                            <Link to='/periodic'><div><DiAtom /></div></Link>
                        </IconContext.Provider>
                    </li>
                    <li >
                        <IconContext.Provider value={{ size: 25, color: '#FCDEBE' }}>
                            <div ><GiMolecule /></div>
                        </IconContext.Provider>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
