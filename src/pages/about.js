import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Profile from "../components/profile"
import Instagram from "../components/instagram"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Nav />
    <Profile />
    <div className="frame">
      <Instagram />
    </div>
  </Layout>
)

export default About
