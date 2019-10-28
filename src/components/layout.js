/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Links from "./links"

import "./styles/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <footer>
          <Links />
          <p>
            © {new Date().getFullYear()} David Aaron Pierce
            <br />
            Site built with{" "}
            <div className="emoji">
              <span role="img" aria-label="coffee">
                ☕
              </span>
            </div>{" "}
            and
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
