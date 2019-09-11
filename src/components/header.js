import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import VisitCard from "./visitcard"

const Header = ({ siteTitle }) => (
  <header>
    <VisitCard></VisitCard>       
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
