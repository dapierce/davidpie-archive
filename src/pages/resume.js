import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="David Aaron Pierce / resume" />
    <h1>David Aaron Pierce</h1>
    <h2>Education</h2>
    <h3>Seattle University</h3>
    <h4>2016-2020</h4>
    <p>Master's in Computer Science</p>
    <h2>Skills</h2>
    <h2>Experience</h2>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage