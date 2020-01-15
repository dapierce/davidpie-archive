import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faKeybase,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Links = () => (
  <div className="links">
    <ul>
      <li>
        <a href="https://github.com/dapierce" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
          <span className="link-label">GitHub</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/piercedavid/"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <span className="link-label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/da_pierce" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="link-label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://keybase.io/dapierce" aria-label="Keybase">
          <FontAwesomeIcon icon={faKeybase} />
          <span className="link-label">Keybase</span>
        </a>
      </li>
    </ul>
  </div>
)

export default Links
