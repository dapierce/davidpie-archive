import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

/* TODO: add button styling from intro.module.css here
so this has consistent styling everywhere! */

const Button = ({ children, to }) => <Link to={to}>{children}</Link>

export default Button
