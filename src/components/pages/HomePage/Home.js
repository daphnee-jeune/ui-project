import React from "react"
import Hero from "../../HeroSection/Hero"
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data"
import Pricing from "../../Pricing/Pricing"

const Home = () => {
    return (
        <div>
            <Hero {...homeObjOne} />
            <Hero {...homeObjThree} />
            <Hero {...homeObjTwo} />
            <Pricing />
            <Hero {...homeObjFour} />
        </div>
    )
}

export default Home
