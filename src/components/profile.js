import React from "react"

import ProfilePhoto from "./profile-photo"

import styles from "./styles/intro.module.css"

const Profile = () => (
  <div className="frame__twocolumn">
    <div className={styles.blurb}>
      <h1 className={styles.hi}>I'm David Aaron Pierce</h1>
      <p>I build websites and love the JAMStack!</p>
      <p>
        I love designing and coding interfaces that look good and incorporate
        modern accessibility standards to ensure usability for as many people as
        possible.
      </p>
      <p>
        My hobbies include drawing, video games (retro NES and SNES especially)
        and spending time with my talented wife Tisha and our son.
      </p>
    </div>
    <div className={styles.face}>
      <ProfilePhoto />
    </div>
  </div>
)

export default Profile
