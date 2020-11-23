import React from "react"
import Layout from "../components/layout"
import { Projects } from "../components"
import { graphql } from "gatsby"

const Mangas = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  console.log(projects)
  return (
    <Layout>
      <Projects projects={projects} />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Mangas" } }) {
      nodes {
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

export default Mangas
