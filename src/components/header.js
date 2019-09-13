import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import VisitCard from "./visitcard"

import Contactlist from "./contactlist"
import { Navbar, Nav } from "react-bootstrap"

import styled from "styled-components"

const StyledNavLink = styled(Nav.Link)`
  color: LightGray !important;

  :hover {
    color: white !important;
  }

`


const Header = ({ siteTitle }) => (
  <Navbar bg="dark" expand="lg" sticky="top">
    <Navbar.Brand><VisitCard ></VisitCard></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <StyledNavLink>Blog</StyledNavLink>
        <StyledNavLink>Wissen</StyledNavLink>
        <StyledNavLink>Profil</StyledNavLink>
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
