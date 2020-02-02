import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const Projects = () => (
  <Layout>
    <SEO title="David Aaron Pierce / projects" />
    <Nav />
    <div className="frame">
      <h1>Projects</h1>
      <h2>Bruja Hair Salon</h2>
      <h2>Miniwallism</h2>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Projects
