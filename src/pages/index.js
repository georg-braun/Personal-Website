import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Input } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogLink from "../components/blog-link"
import styled from "styled-components"
import dateFormat from "dateformat"

const siteTitle = "Startseite"

const SearchContainer = styled.div`
  margin-bottom: 20px;
`

const StyledInputContainer = styled.div`
  width: 200px;
  margin-bottom: 10px;
`

const StyledTag = styled.span`
  font-size: 0.8em;
  margin-right: 5px;
  display: inline-block;
  text-decoration: underline;

  :hover {
    font-weight: bold;
  }
`

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
        <StyledLink href="software-artikel">
          <WebsiteArea>
            Software-Artikel
            <StyledImg fluid={data.screen.edges[0].node.fluid} alt="" />
          </WebsiteArea>
        </StyledLink>
        <StyledLink href="software-projekte">
          <WebsiteArea>
            Software-Projekte
            <StyledImg fluid={data.laptops.edges[0].node.fluid} alt="" />
          </WebsiteArea>
        </StyledLink>
        <StyledLink href="projekte">
          <WebsiteArea>
            Projekte
            <StyledImg fluid={data.hammer.edges[0].node.fluid} alt="" />
          </WebsiteArea>
        </StyledLink>
        <StyledLink href="profil">
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
