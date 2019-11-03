import { Link } from "gatsby"
import React from "react"

import Links from "./links"

const Footer = () => (
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
)

export default Footer
