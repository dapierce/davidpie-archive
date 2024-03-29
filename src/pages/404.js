import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page not found" />
    <Nav />
    <div className="frame">
      <h1>Page not found</h1>
      <p>
        There is no page is at this url, please head back{" "}
        <Link to="/">Home</Link>.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
