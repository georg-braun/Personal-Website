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
  padding-bottom: 10px;
  border-width: 1px;
  border-color: lightgrey;
  border-radius: 5px;
`

const StyledButton = styled(Button)`
  margin-bottom: 5px !important;
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
              <Img fluid={data.allImageSharp.edges[0].node.fluid} alt="" />
              <ProjectBody>



              <ProjectTitle>Familienstammbaum</ProjectTitle>

              <StyledButton
                floated="right"
                href="https://gitlab.com/georg.braun92/family-tree/blob/master/README.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGitlab /> Code + Doku
              </StyledButton>
              <ProjectDuration>
                <FaClock /> 08/2019
              </ProjectDuration>
              <ProjectDescription>
                <StyledBadge variant="primary"><FaReact /> React</StyledBadge>
                <StyledBadge variant="primary">dTree</StyledBadge>
              </ProjectDescription>
              </ProjectBody>
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
