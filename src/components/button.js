import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from "./styles/button.module.css"

const Button = ({ children, to }) => (
  <Link className={style.button} to={to}>
    {children}
  </Link>
)

export default Button
