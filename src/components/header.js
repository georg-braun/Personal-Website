import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import VisitCard from "./visitcard"

import Contactlist from "./contactlist"

const Header = ({ siteTitle }) => (
  <header>
    <VisitCard></VisitCard>
    <Contactlist></Contactlist>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
