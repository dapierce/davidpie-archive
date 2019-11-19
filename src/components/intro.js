import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./styles/intro.module.css"

const Intro = () => (
  <div className={styles.container}>
    <div className={styles.frame}>
      <h1 className={styles.title}>David Aaron Pierce</h1>
    </div>
    {/* <div className={styles.frame__twocolumn}>
      <div className={styles.face}></div> */}
    <div className={styles.blurb}>
      <h2 className={styles.hi}>
        <div className={styles.wave}>
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </div>{" "}
        Hi!
      </h2>
      <p className={styles.description}>
        I'm a <strong>Full stack developer</strong> with a passion for{" "}
        <em>accessible UI</em> and <em>beautiful interfaces</em>.
      </p>
    </div>
    <div className={styles.buttonList}>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
    <p className={styles.location}>
      <span className={styles.pin} role="img" aria-label="location pin">
        📍
      </span>
      Seattle | WA | USA
    </p>
  </div>
)

Intro.propTypes = {
  siteTitle: PropTypes.string,
}

Intro.defaultProps = {
  siteTitle: ``,
}

export default Intro
