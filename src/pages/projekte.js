import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Badge } from "react-bootstrap"
import { Button } from "semantic-ui-react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import { FaClock, FaGitlab, FaReact } from "react-icons/fa"

const StyledProjectContainer = styled.div`
  border-style: solid;
  border-width: 0px 1px 0px 1px !important;
  border-width: 1px;
  border-color: lightgrey;
  border-radius: 5px;
  padding-bottom: -10px !important;
  padding-top: 3px;

  :hover {
    transform: translate(0, -5px);
    -webkit-transform: translate(0, -5px);
    -o-transform: translate(0, -5px);
    -moz-transform: translate(0, -5px);
    transition-duration: 0.5s;
  }
`

const StyledButton = styled(Button)`
  margin-bottom: 5px !important;

  :hover {
    background-color: orange !important;
  }
`

const ProjectContainer = styled.div`
  margin-top: 20px;
`

const ProjectTitle = styled.h3`
  margin-top: 5px;
`

const ProjectDuration = styled.span`
  color: gray;
`

const ProjectBody = styled.div`
  margin: 10px;
`

const ProjectDescription = styled.div`
  margin-top: 10px;
`

const StyledBadge = styled(Badge)`
  margin-right: 5px;
  font-size: 0.9em;
`

const ProjectFooter = styled.div`
  margin: 0px;
  padding: 0px;
`

const StyledImg = styled(Img)`
  picture {
    // picture styles
    border-width: 0px;
  }
`

const StyledIconContainer = styled.span`
  margin-right: 10px;
`

const siteTitle = "Projekte"
export default ({ data }) => (
  <Layout title={siteTitle}>
    <SEO title={siteTitle} />

    <ProjectContainer>
      <Row>
        <Col lg="6">
          <StyledProjectContainer>
            <a
              href="http://stammbaum.georg-braun.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledImg
                fluid={data.allImageSharp.edges[0].node.fluid}
                alt=""
              />
              <ProjectBody>
                <ProjectTitle>Familienstammbaum</ProjectTitle>

                <ProjectDuration>
                  <FaClock /> 08/2019
                </ProjectDuration>
                <ProjectDescription>
                  <StyledBadge variant="primary">
                    <FaReact /> React
                  </StyledBadge>
                  <StyledBadge variant="primary">dTree</StyledBadge>
                </ProjectDescription>
              </ProjectBody>
              <ProjectFooter>
                <StyledButton
                  fluid
                  href="https://gitlab.com/georg.braun92/family-tree/blob/master/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledIconContainer>
                    <FaGitlab />
                  </StyledIconContainer>
                  Code + Projektbeschreibung
                </StyledButton>
              </ProjectFooter>
            </a>
          </StyledProjectContainer>
        </Col>
      </Row>
    </ProjectContainer>
  </Layout>
)

export const query = graphql`
  {
    allImageSharp(
      filter: { fluid: { originalName: { regex: "/stammbaum-preview.jpg/" } } }
    ) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`
