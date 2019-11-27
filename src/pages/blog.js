import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const Blog = () => (
  <Layout>
    <SEO title="David Aaron Pierce / blog" />
    <Nav />
    <div className="frame">
      <h1>Blog</h1>
      <h2>Post title here</h2>
      <h2>Post title no. 2</h2>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Blog
