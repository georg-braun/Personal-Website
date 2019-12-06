/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Footer from "./footer"
import {
  Container,
  Icon,
  Image,
  Menu,
  Header,
  Grid,
  Sidebar,
} from "semantic-ui-react"
import { FaXing, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import AvatarImg from "../images/avatar.png"
import BannerImg from "../images/banner.png"

const cMobileDesktopViewWidthBreakPoint = "600px"

const ProfileContainer = styled.div`
  padding-top: 50px;

  @media (max-width: 991px) {
    display: none !important;
  }
`

const ComputerViewMenu = styled(Menu.Menu)`
  @media (max-width: ${cMobileDesktopViewWidthBreakPoint}) {
    display: none !important;
  }
`

const ImageContainer = styled.div`
  max-width: 120px;
`

const StyledMenu = styled(Menu)`
  margin-top: 20px !important;
  border: none !important;
  box-shadow: none !important;
`

const StyledPersonInfoContent = styled.div`
  margin-bottom: 10px;
  color: black;
`

const FixedContent = styled.div`
  position: fixed;
`

const StyledBurgerMenu = styled(Menu.Item)`
  margin-left: -35px;
  @media (min-width: ${cMobileDesktopViewWidthBreakPoint}) {
    display: none !important;
  }
`

const StyledBanner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${BannerImg});

  height: 200px;
  @media (max-width: ${cMobileDesktopViewWidthBreakPoint}) {
    height: 100px;
  }

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`


const StyledBannerText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`

const StyledMenuContainer = styled(Container)`
  margin-top: -20px;
`

const StyledBannerTitle = styled.h1`
  color: white;
`

const StyledSiteContent = styled.div`
  margin-top: 30px;
`

const PersonInfo = ({ children, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <StyledPersonInfoContent>{children}</StyledPersonInfoContent>
    </a>
  )
}

const MenuEntries = () => {
  return (
    <>
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
    </>
  )
}

// Um die Kontext-Referenz für das Sticky zu erstellen ist es notwendig eine Komponenten Klasse zu erstellen
const Layout = ({ children }) => {
  const [sidebarIsVisible, setVisible] = useState(false)
  return (
    <>
      <Sidebar
        className="mobile-sidebar"
        as={Menu}
        animation="overlay"
        icon="labeled"
        onHide={() => setVisible(false)}
        vertical
        visible={sidebarIsVisible}
        width="thin"
      >
        <MenuEntries />
      </Sidebar>

      <Sidebar.Pusher></Sidebar.Pusher>

      <StyledMenuContainer>
        <StyledMenu size="huge" borderless>
          <StyledBurgerMenu>
            <div
              onClick={() => {
                setVisible(true)
              }}
            >
              <Icon name="bars"></Icon>
            </div>
          </StyledBurgerMenu>
          <ComputerViewMenu position="right">
            <MenuEntries />
          </ComputerViewMenu>
        </StyledMenu>
      </StyledMenuContainer>

      <StyledBanner>
        <StyledBannerText>
          <StyledBannerTitle> Georg Braun</StyledBannerTitle>
          <p>Softwareentwickler</p>
        </StyledBannerText>
      </StyledBanner>

      <Container>
        <Grid>
          <Grid.Column computer={4}>
            <ProfileContainer>
              <FixedContent>
                <ImageContainer>
                  <Image src={AvatarImg} circular></Image>
                </ImageContainer>

                <Header>Georg Braun</Header>
                <p>Softwareentwickler</p>

                <PersonInfo text="Aachen" />
                <PersonInfo link="https://www.xing.com/profile/Georg_Braun18">
                  <FaXing /> Xing
                </PersonInfo>
                <PersonInfo link="https://www.linkedin.com/in/georg-braun-41286b140/">
                  <FaLinkedin /> Linkedin
                </PersonInfo>

                <PersonInfo link="https://github.com/velox1992">
                  <FaGithub /> Github
                </PersonInfo>
                <PersonInfo link="mailto:mail@georg-braun.de">
                  <FaEnvelope /> Mail
                </PersonInfo>
              </FixedContent>
            </ProfileContainer>
          </Grid.Column>
          <Grid.Column mobile={16} computer={12}>
            <StyledSiteContent>{children}</StyledSiteContent>
          </Grid.Column>
        </Grid>
        <Footer />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
