import React from "react"
import Background from "./Background"

const Hero = () => {
  return (
    <div>
      <Background>
        <h1 className="md:text-5xl text-2xl text-fuchsia-100 tracking-wider text-center md:leading-loose">
          Meine Lieblingscharaktere aus <br /> verschiedenen Mangas
        </h1>
      </Background>
    </div>
  )
}

export default Hero
