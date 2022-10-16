import React, { useState } from "react"
import { Link,Route,Routes } from "react-router-dom"
import App from "./App"
import App2 from "./App2"


export default Navigator = () => {
    const [active, setActive] = useState('Normal');
    return(
        <>
            <div className="navigationStyle">
                <nav>
                    <h1 style={{backgroundColor : active == 'Normal'? 'gold' : '#C5C6D0'}}>
                        <Link to="/" className="link" onClick={() => setActive('Normal')}>Normal Calculator</Link>
                    </h1>
                    <h1 style={{backgroundColor : active == 'Scientific'? 'gold' : '#C5C6D0'}}>
                        <Link to="/Scientific" className="link" onClick={() => setActive('Scientific')}>Scientific Calculator</Link>
                    </h1>
                </nav>
            </div>
            <Routes>
                <Route path = "/" element = {<App2/>}/>
                <Route exact path = "/Scientific" element = {<App/>}/>
            </Routes>
        </>
    )
}