import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./styles/nav.module.css"

const Nav = ({ location }) => (
  // change Nav if on home page
  <nav className={styles.nav}>
    <div className={styles.navbar}>
      <ul className={styles.title}>
        <li>
          <Link to="/">
            david
            <span role="img" aria-label="pie">
              🥧
            </span>
          </Link>
        </li>
      </ul>
      <ul className={styles.navlinks}>
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
    </div>
  </nav>
)

Nav.propTypes = {
  location: PropTypes.string,
}

Nav.defaultProps = {
  location: ``,
}

export default Nav
