import React from "react"

const SearchForm = ({ projects, setProjects, setBackToAll }) => {
  const [index, setIndex] = React.useState(0)
  const types = [
    "all",
    ...new Set(
      projects.map(project => {
        return project.data.category
      })
    ),
  ]
  const showProjects = (type, typeIndex) => {
    setIndex(typeIndex)
    if (type === "all") {
      setBackToAll()
    } else {
      const tempProjects = projects.filter(
        project => project.data.category === type
      )
      setProjects(tempProjects)
    }
  }
  return (
    <div className="breite grid grid-cols-3 md:grid-cols-7 mb-2">
      {types.map((type, typeIndex) => {
        return (
          <button
            key={typeIndex}
            onClick={() => {
              showProjects(type, typeIndex)
            }}
            className={`text-rose-500 font-bold capitalize${
              typeIndex === index ? " text-rose-800" : ""
            }`}
          >
            {type}
          </button>
        )
      })}
    </div>
  )
}

export default SearchForm
