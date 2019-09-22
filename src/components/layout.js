/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import styled from "styled-components"
import ContactList from "./contactlist"
import Footer from "./footer"
import {
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Sidebar as SidebarMobile,
  Sidebar as SidebarDekstop,
} from "semantic-ui-react"
import AvatarImg from "../images/avatar.png"

const StyledContainer = styled(Container)`
  padding-top: 40px;
`

const FullHeightContainer = styled.div`
  height: "100%";
`

const NameInfoItem = styled(Menu.Item)`
@media (max-width: 600px) {
  display: none !important;
}
`

const Layout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [visible, setVisible] = useState(false)

  var SiteTitleInfo = null
  if (title !== undefined) {
    SiteTitleInfo = <Menu.Item>{title}</Menu.Item>
  }

  return (
    <FullHeightContainer>
      <Menu inverted fixed="top">
        
        <div onMouseOver={() => {
            setVisible(true)
          }}>
        <Menu.Item
          onClick={() => {
            setVisible(true)
          }}
        >
          <Icon name="bars"></Icon>
        </Menu.Item>
        </div>

        {SiteTitleInfo}
        <Menu.Menu position="right">

        <NameInfoItem position="right">
         Georg Braun
        
        </NameInfoItem>
        <Menu.Item position="right">
          <ContactList></ContactList>
        </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Sidebar
        className="mobile-sidebar"
        as={Menu}
        animation="push"
        icon="labeled"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item>
          <div>
            <Image src={AvatarImg} circular></Image>
            <div>Georg Braun</div>
            <div>Aachen</div>
          </div>
        </Menu.Item>

        <Menu.Item as="a" href="/">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a" href="/wissen">
          <Icon name="gamepad" />
          Wissen
        </Menu.Item>
        <Menu.Item as="a" href="/projekte">
          <Icon name="camera" />
          Projekte
        </Menu.Item>
        <Menu.Item as="a" href="/profil">
          <Icon name="camera" />
          Profil
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <StyledContainer>
            <main>{children}</main>
          </StyledContainer>
          <Footer>Hey</Footer>
        </Segment>
      </Sidebar.Pusher>
    </FullHeightContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
