/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  Icon,
  Image,
} from "semantic-ui-react"
import { FaXing, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import Footer from "./footer"
import AvatarImg from "../images/avatar.png"
import SidebarImg from "../images/background.png"

const cMobileDesktopViewWidthBreakPoint = "600px"

const WebReference = styled.span`
  margin: 7px;
  color: white;
`

const SidebarContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${SidebarImg});
  background-position: 20% 20%;   
  background-size: cover;

  @media (min-width: ${cMobileDesktopViewWidthBreakPoint}) {
    position: fixed;
    height: 100vh;
    width: 30vw;  
    padding-top: 5px;
  }
  @media (max-width: ${cMobileDesktopViewWidthBreakPoint}) {
    width: 100%;
    background-position: 20% 90%;   
    padding-bottom: 5px;
    
  }
`

const StyledSiteContent = styled.div`
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
  flex-wrap: wrap;
`

const LayoutColumnContent = styled.div`
  @media (min-width: ${cMobileDesktopViewWidthBreakPoint}) {
    width: 70vw;
    margin-left: 32vw;
    margin-right: 2vw;
  }
  @media (max-width: ${cMobileDesktopViewWidthBreakPoint}) {
    width: 100vw;
    margin-left: 0;
  }
`

const SidebarPersonalInfo = styled.div`
  color: white ;
  text-align: center;
`

const SiteNavigation = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  color: LightGray;
  text-align: center;
`

const SiteNavigationEntry = styled.a`
  margin: 5px;  
  color: inherit;
  text-decoration: none;

  :hover {
    color: white;
  }
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
      <LayoutRow>
        <SidebarContainer>
            <SidebarPersonalInfo>
              <Image  src={AvatarImg} size="small" href="/" ></Image>
              <p>Georg Braun</p>
            </SidebarPersonalInfo>
            <SiteNavigation>
              <SiteNavigationEntry href="/">
                <Icon name="home" /> Blog
              </SiteNavigationEntry>
              |
              <SiteNavigationEntry href="/projekte">
                <Icon name="pencil" /> Projekte
              </SiteNavigationEntry>
              |
              <SiteNavigationEntry href="/profil">
                <Icon name="user circle" /> Profil
              </SiteNavigationEntry>
            </SiteNavigation>
            <SidebarPersonalInfo>
              <References />
            </SidebarPersonalInfo>
            
        </SidebarContainer>
        <LayoutColumnContent>
          <StyledSiteContent>{children}</StyledSiteContent>
          <Footer />
        </LayoutColumnContent>
      </LayoutRow>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
