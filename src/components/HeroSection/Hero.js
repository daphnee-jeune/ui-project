import React from "react"
import { Btn } from "../Btn/Btn"
import { Link } from "react-router-dom"
import "./Hero.css"

const Hero = ({ lightBg, topLine, lightText, lightTextDesc, headline, desc, btnLabel, img, alt, imgStart }) => {
    return (
        <div className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}>
            <div className="container">
                <div className="row home__hero-row"
                    style={{ display: "flex", flexDirection: imgStart === "start" ? "row-reverse" : "row" }}
                >
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top0line">{topLine}</div>
                            <h1 className={lightText ? "heading" : "heading dark"}>{headline}</h1>
                            <p className={lightTextDesc ? "home__hero-subTitle" : "home__hero-subTitle dark"}>{desc}</p>
                            <Link to="/sign-up">
                                <Btn btnSize="btn--wide" btnColor="blue">{btnLabel}</Btn>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
