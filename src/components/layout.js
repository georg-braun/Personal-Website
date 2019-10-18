/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import ContactList from "./contactlist"
import Footer from "./footer"
import {
  Container,
  Icon,
  Image,
  Menu,
  Header,
  Grid,
  Sticky,
  Table,
} from "semantic-ui-react"
import { FaXing, FaLinkedin, FaGitlab, FaEnvelope } from "react-icons/fa"
import AvatarImg from "../images/avatar.png"

const StyledContainer = styled(Container)`
  padding-top: 40px;
`


const ProfileContainer = styled.div`
  padding-top: 50px;

  @media (max-width: 600px) {
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

const PersonInfo = ({ children, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <StyledPersonInfoContent>{children}</StyledPersonInfoContent>
    </a>
  )
}

// Um die Kontext-Referenz für das Sticky zu erstellen ist es notwendig eine Komponenten Klasse zu erstellen
class Layout extends Component {
  contextRef = React.createRef()

  render() {
    return (
      <>
        <Container>
          <StyledMenu size="huge" borderless>
            <Menu.Menu position="right">
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
            </Menu.Menu>
          </StyledMenu>

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

                  <PersonInfo link="https://gitlab.com/georg.braun92">
                    <FaGitlab /> Gitlab
                  </PersonInfo>
                  <PersonInfo link="mailto:mail@georg-braun.de">
                    <FaEnvelope /> Mail
                  </PersonInfo>
                </FixedContent>
              </ProfileContainer>
            </Grid.Column>
            <Grid.Column mobile={16} computer={12}>{this.props.children}</Grid.Column>
          </Grid>
        </Container>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
