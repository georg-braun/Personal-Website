import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Badge } from "react-bootstrap"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import { FaClock } from "react-icons/fa"

const StyledProjectContainer = styled.div`
  :hover {
    transform: translate(0, -5px);
    -webkit-transform: translate(0, -5px);
    -o-transform: translate(0, -5px);
    -moz-transform: translate(0, -5px);
    transition-duration: 0.5s;
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
          <a
            href="http://stammbaum.georg-braun.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledProjectContainer>
              <Img fluid={data.allImageSharp.edges[0].node.fluid} alt="" />
              <ProjectTitle>Familienstammbaum</ProjectTitle>
              <ProjectDuration>
              <FaClock /> 08/2019
                </ProjectDuration>
                <ProjectDescription>
                <StyledBadge variant="primary">React</StyledBadge> 
                <StyledBadge variant="primary">dTree</StyledBadge>
                </ProjectDescription>
            </StyledProjectContainer>
          </a>
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
