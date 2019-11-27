import React from "react"

import Links from "./links"

const Footer = () => (
  <footer>
    <Links />
    <p>
      © {new Date().getFullYear()} David Aaron Pierce
      <br />
      Built with{" "}
      <span className="emoji">
        <span role="img" aria-label="coffee">
          ☕
        </span>
      </span>{" "}
      and
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </p>
  </footer>
)

export default Footer
