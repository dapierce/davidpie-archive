import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"

const Resume = () => (
  <Layout>
    <SEO title="David Aaron Pierce / resume" />
    <Nav />
    <div className="frame">
      {/*
      TODO: this is going to be derived from .md file
      */}
      <h1>David Aaron Pierce</h1>
      <h2>Education</h2>
      <h3>Seattle University</h3>
      <h4>2016-2020</h4>
      <p>Master's in Computer Science</p>
      <h2>Skills</h2>
      <h2>Experience</h2>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Resume
