import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/intro"
// import Projects from "../components/projects"
// import Blog from "../components/blog"

const IndexPage = () => (
  <Layout>
    <SEO title="David Aaron Pierce / full stack web developer" />
    <Intro />
    {/* TODO: Projects go here */}
    {/* TODO: Blog goes here */}
  </Layout>
)

export default IndexPage
