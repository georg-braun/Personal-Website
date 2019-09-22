import PropTypes from "prop-types"
import React from "react"
import VisitCard from "./visitcard"

import Contactlist from "./contactlist"
import { Navbar, Nav } from "react-bootstrap"

import styled from "styled-components"


const StyledNavText = styled.span`
color: #fdfffc !important;
:hover {
  color: #ffffff !important;
  border-bottom: 2px solid white;
  padding-bottom: 2px;
}
`

const StyledNavbar = styled(Navbar)`
  background-color: #235789;
`

const StyledNavbarToggle = styled(Navbar.Toggle)`
  border-color: transparent !important;
  background: transparent !important;
`


const Header = ({ siteTitle }) => (
  <StyledNavbar  expand="lg" sticky="top">
    <Navbar.Brand>
      <VisitCard></VisitCard>
    </Navbar.Brand>
    <StyledNavbarToggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="mr-auto">
        <Nav.Link href="/"><StyledNavText>Blog</StyledNavText></Nav.Link>
        <Nav.Link href="/wissen"><StyledNavText>Wissen</StyledNavText></Nav.Link>
        <Nav.Link href="/projekte"><StyledNavText>Projekte</StyledNavText></Nav.Link>
        <Nav.Link href="/profil"><StyledNavText>Profil</StyledNavText></Nav.Link>
      </Nav>
      <Contactlist></Contactlist>
    </Navbar.Collapse>
  </StyledNavbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
