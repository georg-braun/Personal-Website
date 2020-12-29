/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Icon } from "semantic-ui-react"
import { FaXing, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import Footer from "./footer"
import AvatarImg from "../images/avatar.png"
import { Navbar, Image, Dropdown, DropdownButton } from "react-bootstrap"

const WebReference = styled.span`
  margin: 7px;
  color: white;
`



const StyledSiteContent = styled.div`
  width: 70vw;
  margin-left: 15vw;
  margin-top: 30px;
`

const Reference = ({ children, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <WebReference>{children}</WebReference>
    </a>
  )
}

const LayoutRow = styled.div`
  display: flex;
  flex-direction: column;
`

const BootstrapImage = styled(Image)`
  margin: 0px;
`

const BootstrapDropdownButton = styled(DropdownButton)`
  border: 0px;
  color: white !important;
`

const References = () => {
  return (
    <>
      <Reference link="https://www.xing.com/profile/Georg_Braun18">
        <FaXing />
      </Reference>
      <Reference link="https://www.linkedin.com/in/georg-braun-41286b140/">
        <FaLinkedin />
      </Reference>
      <Reference link="https://github.com/velox1992">
        <FaGithub />
      </Reference>
      <Reference link="mailto:mail@georg-braun.de">
        <FaEnvelope />
      </Reference>
    </>
  )
}

const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" className="py-0">
        <a href="/">
          <div>
            <BootstrapImage
              src={AvatarImg}
              width="100"
              href="/"
            ></BootstrapImage>
          </div>
        </a>
        <a href="/">
          <Navbar.Brand>Georg Braun</Navbar.Brand>
        </a>
        <Navbar.Brand>/</Navbar.Brand>

        <BootstrapDropdownButton
          id="dropdown-basic-button"
          menuAlign="right"
          title=""
          variant="secondary"
        >
          <Dropdown.Item href="/software-artikel">
          <Icon name="book" />Software Artikel
          </Dropdown.Item>
          <Dropdown.Item href="/software-projekte">
            <Icon name="pencil" />Software Projekte
          </Dropdown.Item>
          <Dropdown.Item href="/projekte">
            <Icon name="rocket" />Projekte
          </Dropdown.Item>
          <Dropdown.Item href="/profil">
            <Icon name="user circle" /> Profil
          </Dropdown.Item>
        </BootstrapDropdownButton>
        <Navbar.Collapse className="justify-content-end">
          <References />
        </Navbar.Collapse>
      </Navbar>

      <LayoutRow>
        <StyledSiteContent>{children}</StyledSiteContent>
        <Footer />
      </LayoutRow>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
