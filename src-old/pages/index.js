import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import routes from "../routes"

const siteTitle = "Startseite"


const StyledLink = styled.a`
  text-decoration: none;
  color: black;
`

const SiteFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const WebsiteArea = styled.div`
  width: 250px;
  height: 200px;
  margin: 10px;
  padding: 10px;

  border-radius: 5px;

  text-align: center;
`

const StyledImg = styled(Img)`
  max-height: 150px;
  margin-top: 2px;
`


export default ({ data }) => {

  return (
    <Layout>
      <SEO title={siteTitle} />

      <SiteFlexContainer>
      <StyledLink href={routes.softwareProjects}>
          <WebsiteArea>
            Software-Projekte
            <StyledImg fluid={data.laptops.edges[0].node.fluid} alt="" />
          </WebsiteArea>
        </StyledLink>
        <StyledLink href={routes.projects}>
          <WebsiteArea>
            Projekte
            <StyledImg fluid={data.hammer.edges[0].node.fluid} alt="" />
          </WebsiteArea>
        </StyledLink>
        <StyledLink href={routes.profile}>
          <WebsiteArea>
            Profil
            <StyledImg fluid={data.avatar.edges[0].node.fluid} alt="" />
          </WebsiteArea>
        </StyledLink>
      </SiteFlexContainer>
    </Layout>
  )
}

export const query = graphql`
  {
    hammer: allImageSharp(
      filter: { fluid: { originalName: { regex: "/hammer.jpg/" } } }
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
    laptops: allImageSharp(
      filter: { fluid: { originalName: { regex: "/laptops.jpg/" } } }
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
    screen: allImageSharp(
      filter: { fluid: { originalName: { regex: "/screen.jpg/" } } }
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
    avatar: allImageSharp(
      filter: { fluid: { originalName: { regex: "/avatar.png/" } } }
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
