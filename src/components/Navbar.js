import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FaBars } from "react-icons/fa"

const navbarLinks = graphql`
  {
    allAirtable(filter: { table: { eq: "Links" } }) {
      nodes {
        data {
          page
        }
      }
    }
  }
`
const Navbar = () => {
  const {
    allAirtable: { nodes },
  } = useStaticQuery(navbarLinks)
  const allNodes = [...new Set(nodes.map(node => node.data.page))]
  // console.log(allNodes)
  return (
    <nav className="bg-rose-900">
      <div className="breite text-fuchsia-100 text-xl font-bold md:flex md:justify-between md:items-center">
        <div className="flex justify-between p-2">
          <Link to="/" className="text-rose-50 text-3xl font-bold italic">
            Manhwa
          </Link>
          <button className="text-rose-50 text-3xl md:hidden">
            <FaBars />
          </button>
        </div>
        <ul className="md:flex hidden md:space-x-6">
          {allNodes.map((allNode, index) => {
            return (
              <li className="uppercase" key={index}>
                {allNode}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
