import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Btn } from "../Btn/Btn"
import "./Navbar.css"
import { IconContext} from "react-icons/lib"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [btn, setBtn] = useState(true)

    const closeMobileMenu = () => setClick(false)

    const showBtn = () => {
        if(window.innerWidth <= 960) {
            setBtn(false)
        } else {
            setBtn(true)
        }
    }

    useEffect(() => {
        showBtn()
    }, [])

    window.addEventListener("resize", showBtn)

    return (
        <>
           <IconContext.Provider value={{ color: "#fff"}}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <MdFingerprint className="navbar-icon" />
                            LAVISH
                        </Link>
                        <div className="menu-icon" onClick={() => setClick(!click)}>
                            {click ? <FaTimes /> : <FaBars /> }
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                    Products
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {btn ? (
                                    <Link to="/sign-up" className="btn-link">
                                        <Btn btnStyle="btn--outline">SIGN UP</Btn>
                                    </Link>
                                ) : (
                                    <Link to="/sign-up" className="btn-link" onClick={closeMobileMenu}>
                                        <Btn btnStyle="btn--outline" btnSize="btn--mobile" onClick={closeMobileMenu}>SIGN UP</Btn>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div> 
           </IconContext.Provider>
        </>
    )
}

export default Navbar
