import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaQuoteRight } from "react-icons/fa"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import Title from "./Title"

const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Customers" } }) {
      nodes {
        id
        data {
          name
          quote
          title
          image {
            localFiles {
              childImageSharp {
                fixed(height: 200, width: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

const Slider = () => {
  const [index, setIndex] = React.useState(0)

  const {
    allAirtable: { nodes },
  } = useStaticQuery(query)
  return (
    <div>
      <section
        className="mx-auto text-center overflow-hidden relative w-96"
        style={{ height: "70vh" }}
      >
        <Title title="Das sagen die Fans" />
        <button
          className="absolute left-0 text-rose-500 text-3xl z-10 cursor-pointer"
          style={{ top: "50%" }}
          onClick={() => {
            setIndex(oldIndex => {
              let index = oldIndex - 1
              if (index < 0) {
                index = nodes.length - 1
              }
              return index
            })
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="absolute right-0 text-rose-500 text-3xl z-10 cursor-pointer"
          style={{ top: "50%" }}
          onClick={() => {
            setIndex(oldIndex => {
              let index = oldIndex + 1
              if (index > nodes.length - 1) {
                index = 0
              }
              return index
            })
          }}
        >
          <FiChevronRight />
        </button>
        {nodes.map((slide, slideIndex) => {
          let position = "transform translate-x-full opacity-0"
          if (slideIndex === index) {
            position = "transform translate-x-0"
          }
          if (
            (index === 0 && slideIndex === nodes.length - 1) ||
            slideIndex === index - 1
          ) {
            position = "transform -translate-x-full opacity-0"
          }
          const { id } = slide
          const { name, quote, title } = slide.data
          const fixed = slide.data.image.localFiles[0].childImageSharp.fixed
          return (
            <div
              className={`${position} "text-gray-800 capitalize text-xl mt-8 w-96 absolute transition-all duration-700 ease-in-out`}
              key={id}
            >
              <Image className="rounded-full" fixed={fixed} />
              <h1>{name}</h1>
              <h2>{title}</h2>
              <p>{quote}</p>
            </div>
          )
        })}
        <FaQuoteRight
          className="text-4xl absolute bottom-0 text-rose-400 transform -translate-x-1/2"
          style={{ left: "50%" }}
        />
      </section>
    </div>
  )
}

export default Slider
