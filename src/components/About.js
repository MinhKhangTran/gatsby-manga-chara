import React from "react"
import {
  GiStabbedNote,
  GiBriefcase,
  GiCompass,
  GiDiamondHard,
} from "react-icons/gi"
import { useStaticQuery, graphql } from "gatsby"

const icons = [
  <GiStabbedNote />,
  <GiBriefcase />,
  <GiCompass />,
  <GiDiamondHard />,
]

const aboutquery = graphql`
  {
    allAirtable(filter: { table: { eq: "Services" } }) {
      nodes {
        data {
          icon
          label
          text
        }
      }
    }
  }
`
const About = () => {
  const {
    allAirtable: { nodes },
  } = useStaticQuery(aboutquery)

  return (
    <div className="breite mb-4">
      <article className="md:grid md:grid-cols-4 flex flex-col text-center text-gray-600 text-xl gap-4 space-y-8">
        {icons.map((icon, index) => {
          return (
            <div
              className="text-center text-6xl text-rose-500 md:flex justify-center mt-8 hidden"
              key={index}
            >
              {icon}
            </div>
          )
        })}
        {nodes.map(node => {
          const { label, text } = node.data
          return (
            <div className="">
              <h1 className="capitalize font-semibold">{label}</h1>
              <h1 className="text-lg">{text}</h1>
            </div>
          )
        })}
      </article>
    </div>
  )
}

export default About
