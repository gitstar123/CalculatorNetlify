import React from "react"
import { Link,Route,Routes } from "react-router-dom"
import App from "./App"
import App2 from "./App2"
import { Nav, Navbar, Container } from "react-bootstrap"

export default Navigator = () => {
    return(
        <>
            <div className="navigationStyle">
                <nav>
                    <h1>
                        <Link to="/" className="link">Scientific Calculator</Link>
                    </h1>
                    <h1>
                        <Link to="/Normal" className="link">Normal Calculator</Link>
                    </h1>
                </nav>
            </div>
            <Routes>
                <Route path = "/" element = {<App/>}/>
                <Route exact path = "/Normal" element = {<App2/>}/>
            </Routes>
        </>
    )
}