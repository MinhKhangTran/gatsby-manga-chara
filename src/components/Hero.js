import React from "react"
import Background from "./Background"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

const Hero = ({ projects }) => {
  const [index, setIndex] = React.useState(0)
  const images = projects.map(project => {
    const {
      data: {
        image: { localFiles },
      },
    } = project
    const image = localFiles[0].childImageSharp.fluid
    return image
  })

  React.useEffect(() => {
    let timer = setInterval(() => {
      setIndex(oldValue => {
        let index = oldValue + 1
        if (index > images.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(timer)
    }
  }, [index])
  return (
    <div>
      <Background images={images[index]}>
        <h1 className="md:text-5xl text-2xl text-fuchsia-100 tracking-wider text-center md:leading-loose">
          Meine Lieblingscharaktere aus <br /> verschiedenen Mangas
        </h1>
        <button
          className="absolute left-0 text-5xl text-rose-500"
          onClick={() => {
            setIndex(oldValue => {
              let index = oldValue - 1
              if (index < 0) {
                index = images.length - 1
              }
              return index
            })
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="absolute right-0 text-5xl text-rose-500"
          onClick={() => {
            setIndex(oldValue => {
              let index = oldValue + 1
              if (index > images.length - 1) {
                index = 0
              }
              return index
            })
          }}
        >
          <FiChevronRight />
        </button>
        <div
          className="grid absolute bottom-0 grid-cols-6 h-6 transform -translate-x-1/2 gap-4 mb-4"
          style={{ left: "50%" }}
        >
          {images.map((_, dotIndex) => {
            return (
              <button
                key={dotIndex}
                className={`${
                  dotIndex === index
                    ? "h6 w-6 rounded-full border-fuchsia-400 border-4"
                    : "h6 w-6 rounded-full bg-fuchsia-400 z-10 "
                }`}
                onClick={() => {
                  setIndex(dotIndex)
                }}
              ></button>
            )
          })}
        </div>
      </Background>
    </div>
  )
}

export default Hero
