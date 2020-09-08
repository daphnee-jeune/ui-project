import React from "react"
import Hero from "../../HeroSection/Hero"
import { homeObjFour } from "./Data"
import Pricing from "../../Pricing/Pricing"

const Services = () => {
    return (
        <div>
            <Pricing />
            <Hero {...homeObjFour} />
        </div>
    )
}

export default Services
