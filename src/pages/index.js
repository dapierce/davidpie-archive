import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Intro from "../components/intro"
// import Projects from "../components/projects"
// import Blog from "../components/blog"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Nav />
    <Intro />
    {/* TODO: Projects go here */}
    {/* TODO: Blog goes here */}
  </Layout>
)

export default IndexPage
