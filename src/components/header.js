import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import VisitCard from "./visitcard"

import Contactlist from "./contactlist"
import { Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" expand="lg">
    <Navbar.Brand>Georg Braun</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link>Blog</Nav.Link>
        <Nav.Link>Knowledge</Nav.Link>
        <Nav.Link>Profil</Nav.Link>
      </Nav>
      <Contactlist></Contactlist>
    </Navbar.Collapse>
  </Navbar>
  /*
  <header>
    <VisitCard></VisitCard>
    <Contactlist></Contactlist>
  </header>
  */
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
