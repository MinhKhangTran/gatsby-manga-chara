import React from "react"
import Image from "gatsby-image"
import Title from "./Title"
import SearchForm from "./SearchForm"
import styled from "styled-components"
import { Link } from "gatsby"

const Projects = ({ projects: data, page }) => {
  const [projects, setProjects] = React.useState(data)
  const setBackToAll = () => {
    setProjects(data)
  }
  return (
    <div className="bg-rose-100 py-6">
      <Title title="Meine Favoriten" />
      {!page && (
        <SearchForm
          projects={projects}
          setProjects={setProjects}
          setBackToAll={setBackToAll}
        />
      )}

      <section className="breite grid md:grid-cols-3 grid-cols-1 gap-4">
        {projects.map(project => {
          const { id } = project
          const { name, category } = project.data
          const fluid = project.data.image.localFiles[0].childImageSharp.fluid
          return (
            <Wrapper>
              <div key={id} className="bcg relative bg-rose-500">
                <Image
                  className="img hover:opacity-20 transition-all duration-300 ease-in-out"
                  fluid={fluid}
                />
                <footer
                  className="beschreibung pointer-events-none absolute invisible transform -translate-x-1/2 -translate-y-1/2 text-rose-50 text-xl text-center "
                  style={{ top: "50%", left: "50%" }}
                >
                  <h1 className="capitalize">
                    -{category.split("-").map(item => " " + item + " ")}-
                  </h1>
                  <h1 className="font-semibold">{name}</h1>
                </footer>
              </div>
            </Wrapper>
          )
        })}
      </section>
      {page && (
        <div className="text-center flex justify-center mt-6">
          <Link to="/mangas">
            <button className="rounded-md border-4 border-rose-400 text-rose-400 px-3 text-xl hover:bg-rose-400 hover:text-rose-800 transition-all duration-300 ease-in-out">
              Alle Charaktere sehen
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

const Wrapper = styled.div`
  .img:hover .beschreibung {
    visibility: visible;
  }
  .bcg:hover .beschreibung {
    visibility: visible;
  }
`

export default Projects
