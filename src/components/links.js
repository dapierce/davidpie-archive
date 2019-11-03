import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGitlab,
  faGithub,
  faInstagram,
  faTwitter,
  faKeybase,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Links = () => (
  <div className="links">
    <ul>
      <li>
        <a href="https://gitlab.com/dapierce" alt="GitLab">
          <FontAwesomeIcon icon={faGitlab} />
          <span className="link-label">GitLab</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/dapierce" alt="GitHub">
          <FontAwesomeIcon icon={faGithub} />
          <span className="link-label">GitHub</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/da_pierce/" alt="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
          <span className="link-label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/da_pierce" alt="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="link-label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://keybase.io/dapierce" alt="Keybase">
          <FontAwesomeIcon icon={faKeybase} />
          <span className="link-label">Keybase</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/piercedavid/" alt="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
          <span className="link-label">LinkedIn</span>
        </a>
      </li>
    </ul>
  </div>
)

export default Links
