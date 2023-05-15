import {useState} from "react";
import './NavBar.css'

const NavBar = () => {
    const [clickedBar, setClickedBar] = useState(false);
    return (
        <div className="navBar">
            <div className="header">
                <img className="logo" src={require("./logo.webp")} alt="logo" />
                <a href="index.html" class="companyName">Beaver With U</a>
            </div>
            

            <div className="menu">
                <ul id="menu" className={clickedBar ? "#menu active" : "#menu"}>
                    <li><a href="index.html" className="active">Home</a></li>
                    <li><a href="index.html" >About Us</a></li>
                    <li><a href="index.html" >Event</a></li>
                    <li><a href="index.html" >Program</a></li>
                    <li><a href="index.html" >More</a></li>
                </ul>
            </div>
            <div id="mobile">
                <i className={clickedBar ? "fas fa-times" : "fas fa-bars"} onClick={() => setClickedBar(!clickedBar)}>
                </i>
            </div>

        </div>
    );
}

export default NavBar;