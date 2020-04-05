import PropTypes from "prop-types"
import React from "react"

import Button from "../components/button"
import Greeting from "../components/greeting"

import styles from "./styles/intro.module.css"

const Intro = () => (
  <div className={styles.container}>
    <div className={styles.frame}>
      <h1 className={styles.title}>
        <span className={styles.initial}>David</span> Aaron
        <span className={styles.initial}> Pierce</span>
      </h1>
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
        <Greeting />
      </h2>
      <p className={styles.description}>
        I'm a <strong>Full stack developer</strong> with a passion for{" "}
        <em>accessible UI</em> and <em>beautiful interfaces</em>.
      </p>
    </div>
    <div className={styles.buttonList}>
      <ul>
        <li>
          <Button to="/resume">Resume</Button>
        </li>
        <li>
          <Button to="/projects">Projects</Button>
        </li>
        <li>
          <Button to="/blog">Blog</Button>
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

export default Intro
