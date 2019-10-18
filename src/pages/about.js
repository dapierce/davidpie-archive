import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="David Aaron Pierce / about" />
    <h1>Hi</h1>
    <p>
      I'm a Seattle web developer who is versed in both frontend and backend
      technology.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
