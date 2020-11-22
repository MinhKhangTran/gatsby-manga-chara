import React from "react"
import { Slider, Survey, Hero, Projects } from "../components"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Slider />
      <Survey />
    </Layout>
  )
}
