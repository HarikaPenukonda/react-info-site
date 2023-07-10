/*
    Challenge : Complete the Navbar to match the design

*/

import reactLogo from "../images/react-logo.png"

export default function Navbar(){
    return(
        <nav>
                <img src={reactLogo}
                     alt="React Logo"
                     className="nav--icon"
                     width={40}
                />
                <h3 className="nav--logo_text">React Facts</h3>
                <h4 className="nav--title">React Course-Project 1</h4>
        </nav>
    )
}

