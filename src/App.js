import React from "react"

import "./App.css"
import NavBar from "./Component/NavBar/NavBar"
import Slider from "./Component/Slider/Slider"
import EventListHome from "./Component/EventListHome/EventListHome"

function App() {
    return (
        <div className="home">
            <NavBar />
            <Slider />
            <EventListHome />
        </div>
    );
}

export default App;