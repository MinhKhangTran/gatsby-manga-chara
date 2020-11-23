import React from "react"

const Footer = () => {
  return (
    <div className="text-center text-3xl font-semibold text-gray-800 bg-rose-300 p-4">
      <h1>
        &copy; MKT {new Date().getFullYear()}. Made with{" "}
        <span className="text-purple-500">Gatsby</span>. Hosted by{" "}
        <span className="text-teal-500">Netlify</span>
      </h1>
    </div>
  )
}

export default Footer
