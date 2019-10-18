import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="David Aaron Pierce / projects" />
    <h1>Projects</h1>
    <h2>Bruja Hair Salon</h2>
    <h2>Twitch Time</h2>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
