import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "react-bootstrap"
import { Button } from "semantic-ui-react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { FaGitlab } from "react-icons/fa"
import ProjectEntry from "../components/project-entry"

const StyledButton = styled(Button)`
  margin-bottom: 5px !important;

  :hover {
    background-color: orange !important;
  }
`

const ProjectContainer = styled.div`
  margin-top: 20px;
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
          <ProjectEntry
            projectTitle="Familienstammbaum"
            projectDuration="08/2019"
            image={data.familienstammbaum.edges[0].node.fluid}
            link="http://stammbaum.georg-braun.de"
            tags={["React", "DTree"]}
          >
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
          </ProjectEntry>
        </Col>
        <Col lg="6">
          <ProjectEntry
            projectTitle="GraphToDTreeConverter"
            projectDuration="08/2019"
            image={data.graphdotreeconverter.edges[0].node.fluid}
            link="https://www.npmjs.com/package/graphtodtreeconverter/"
            tags={["JavaScript", "NPM"]}
          >
            <StyledButton
              fluid
              href="https://gitlab.com/georg.braun92/graphtodtreeconverter/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIconContainer>
                <FaGitlab />
              </StyledIconContainer>
              Code + Projektbeschreibung
            </StyledButton>
          </ProjectEntry>
        </Col>       
      </Row>
    </ProjectContainer>
  </Layout>
)

export const query = graphql`
  {
    familienstammbaum: allImageSharp(
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
    graphdotreeconverter: allImageSharp(filter: {fluid: {originalName: {regex: "/arrow-wall.jpg/"}}}) {
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
