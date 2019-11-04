import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./styles/nav.module.css"

const Nav = ({ siteTitle }) => (
  <nav className={styles.nav}>
    <div>
      <h1 className={styles.title}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul className={styles.navbar}>
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
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
