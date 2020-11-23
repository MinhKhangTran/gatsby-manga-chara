import React from "react"
import { Slider, Survey, Hero, Projects, About } from "../components"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Home({ data }) {
  const {
    allAirtable: { nodes: projects },
  } = data

  return (
    <Layout>
      <Hero />
      <About />
      <Projects projects={projects} page />
      <Slider />
      <Survey />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Mangas" } }
      sort: { fields: data___featured, order: ASC }
      limit: 6
    ) {
      nodes {
        id
        data {
          name
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          category
          featured
        }
      }
    }
  }
`
