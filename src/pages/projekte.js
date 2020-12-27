import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "semantic-ui-react"
import { graphql } from "gatsby"
import styled from "styled-components"
import ProjectEntry from "../components/project-entry"

const StyledButton = styled(Button)`
  margin-bottom: 3px !important;
`

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`

const siteTitle = "Software-Projekte"
export default ({ data }) => (
  <Layout title={siteTitle}>
    <SEO title={siteTitle} />

    <ProjectContainer>
      <ProjectEntry
        projectTitle="DIY Kratzbaum"
        projectDuration="03/2020"
        image={data.diykratzbaum.edges[0].node.fluid}
        description="Bau eines Kratzbaums für den neu eingezogenen Kater."
        tags={[]}
      >
        <StyledButton
          fluid
          href="/diy-kratzbaum"
        >
          Zum Projekt
        </StyledButton>

      </ProjectEntry>


    </ProjectContainer>
  </Layout>
)

export const query = graphql`
  {
    diykratzbaum: allImageSharp(
      filter: { fluid: { originalName: { regex: "/diy-kratzbaum-1.jpg/" } } }
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
