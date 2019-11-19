import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from "./nav"

const Header = ({ siteTitle }) => (
  <header>
    <span className="logo">
      <Link to="/">
        <span className="logo-text">DAP</span>
      </Link>
    </span>

    <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
