import React from "react";
import logo from "../images/keep.png";
const Header = () => {
    
    return (
        <>
            <div className="header">
            <img src= {logo} alt="logo" width="30" height="40"/>
            <h1 className="animate__heartBeat"> Rj Keep Note</h1>
            </div>
        </>

    );
}
export default Header;
