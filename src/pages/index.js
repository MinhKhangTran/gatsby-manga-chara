import React from "react"
import { Slider, Survey, Hero, Projects, About } from "../components"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Slider />
      <Survey />
    </Layout>
  )
}
