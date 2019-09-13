import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import VisitCard from "./visitcard"

import Contactlist from "./contactlist"
import { Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" expand="lg" sticky="top">
    <Navbar.Brand><VisitCard ></VisitCard></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link>Blog</Nav.Link>
        <Nav.Link>Wissen</Nav.Link>
        <Nav.Link>Profil</Nav.Link>
      </Nav>
      <Contactlist></Contactlist>
    </Navbar.Collapse>
  </Navbar>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
