/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap"
import styled from "styled-components"
import ContactList from "./contactlist"
import Footer from "./footer"
import { Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react"
import AvatarImg from "../images/avatar.png"

const StyledContainer = styled(Container)`
  padding-top: 40px;
`

const NameInfoItem = styled(Menu.Item)`
  @media (max-width: 600px) {
    display: none !important;
  }
`
const AvatarName = styled.div`
  margin-bottom: 12px;
  font-size: 1.3em;
`
const AvatarDescription = styled.div`
  margin-bottom: 9px;
  font-size: 0.8em;
`

const Layout = ({ children, title }) => {
  const [visible, setVisible] = useState(false)

  var SiteTitleInfo = null
  if (title !== undefined) {
    SiteTitleInfo = <Menu.Item>{title}</Menu.Item>
  }

  return (
    <>
      <Menu inverted fixed="top">
        <div
          onMouseOver={() => {
            setVisible(true)
          }}
        >
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
          <NameInfoItem position="right">Georg Braun</NameInfoItem>
          <Menu.Item position="right">
            <ContactList></ContactList>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Sidebar
        className="mobile-sidebar"
        as={Menu}
        animation="overlay"
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
            <AvatarName>Georg Braun</AvatarName>
            <AvatarDescription>
              <span role="img" aria-label="gps">
                📍
              </span>{" "}
              Aachen
            </AvatarDescription>
            <AvatarDescription>
              <span role="img" aria-label="worker">
                👷
              </span>{" "}
              Softwareentwickler
            </AvatarDescription>
          </div>
        </Menu.Item>

        <Menu.Item as="a" href="/">
          <Icon name="home" />
          Blog
        </Menu.Item>
        <Menu.Item as="a" href="/wissen">
          <Icon name="book" />
          Wissen
        </Menu.Item>
        <Menu.Item as="a" href="/projekte">
          <Icon name="pencil" />
          Projekte
        </Menu.Item>
        <Menu.Item as="a" href="/profil">
          <Icon name="user circle" />
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
