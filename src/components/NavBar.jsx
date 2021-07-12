import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (<nav className="navbar navbar-light bg-light">
        <div className="container-fluid" style={{ justifyContent: "center" }}>
            <Link className="navbar-brand" style={{ color: "gray", fontFamily: "sans-serif", fontSize: "25px", fontWeight: "700" }} to="/">Courses</Link>
        </div>
    </nav >);
}

export default NavBar;