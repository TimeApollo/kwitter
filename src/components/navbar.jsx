import React from 'react'
// import { connect } from "react-redux"



class Navbar extends React.Component {
render() {
    return (
        <div class="navbar">
            <nav style={{display: "flex", justifyContent: "center"}}>
                <img className="banner" src={require("../kwitterLogoFlare.png")}/>
            </nav>
        </div>
    )}
}


export default (Navbar)