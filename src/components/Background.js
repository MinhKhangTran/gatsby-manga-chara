import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"

const backgroundQuery = graphql`
  {
    file(relativePath: { eq: "mainBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Background = ({ children, images }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(backgroundQuery)
  return (
    <Wrapper>
      <BackgroundImage
        fluid={images || fluid}
        Tag="div"
        className="bcg h-screen grid place-items-center object-center object-fit"
        preserveStackingContext={true}
        style={{ marginTop: "-52px" }}
      >
        {children}
      </BackgroundImage>
    </Wrapper>
  )
}

const fadeIn = keyframes`
      from{
         background-color:rgb(0,0,0,0.8);
      }
      to{
        background-color:rgba(0,0,0,0.4);
      }
      `

const Wrapper = styled.div`
  .bcg {
    animation: ${fadeIn} 2s ease-in-out 1 forwards;
  }
  .bcg::before {
    opacity: 1;
  }
`

export default Background
