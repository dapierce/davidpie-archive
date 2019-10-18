/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Nav from "./nav"

import "./styles/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Nav siteTitle="david🥧.design" />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} David Aaron Pierce
          <br />
          Site generated using
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
