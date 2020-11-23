import React from "react"

const Title = ({ title }) => {
  return (
    <h1 className="text-4xl text-center font-semibold mt-6 mb-6 tracking-wide">
      <span className="text-fuchsia-500">/</span> {title}
    </h1>
  )
}

export default Title
