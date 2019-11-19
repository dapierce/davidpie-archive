import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./styles/nav.module.css"

const Nav = ({ location }) => (
  // change Nav if on home page
  <nav className={styles.nav}>
    <ul className={styles.navbar}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
    </ul>
  </nav>
)

Nav.propTypes = {
  location: PropTypes.string,
}

Nav.defaultProps = {
  location: ``,
}

export default Nav
