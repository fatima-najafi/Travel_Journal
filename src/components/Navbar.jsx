import React from "react";
import '../components/style.css'
export default function Navbar(){
    return(
        <nav>
            <img src="../src/assets/logo.png" alt="" className="nav-img" />
            <h1 className="nav-title">My Travel Journal.</h1>
        </nav>
    )
}