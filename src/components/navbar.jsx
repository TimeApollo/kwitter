import React from 'react'
// import { connect } from "react-redux"



class Navbar extends React.Component {
render() {
    return (
        <div className="navbar">
            <nav style={{display: "flex", justifyContent: "center"}}>
                <img 
                    className="banner" 
                    src={require("../kwitterLogoFlare.png")}
                    style={{marginBottom: "4em"}}
                    />
            </nav>
        </div>
    )}
}


export default (Navbar)