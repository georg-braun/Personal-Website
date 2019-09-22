import "bootstrap/dist/css/bootstrap.min.css"

import React, { useState } from "react"
import { graphql } from "gatsby"
import { Alert } from "react-bootstrap"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import KnowledgeLink from "../components/knowledge-link"



// Assumes that the data is ordered by category
function createKnowledgeOverview(data) {
  var hLastCategory = null

  var hOverview = data.allMarkdownRemark.edges.map(({ node }) => {
    var hCurrentCategory = node.frontmatter.category

    // Check if the a new category header is necessary
    var hCategoryHeader = null
    if (hCurrentCategory !== hLastCategory) {
      hCategoryHeader = <h3>{hCurrentCategory}</h3>
      hLastCategory = hCurrentCategory
    }

    return (
      <>
        {hCategoryHeader}
        <KnowledgeLink
          title={node.frontmatter.title}
          path={node.fields.slug}
          tags={node.frontmatter.tags}
        ></KnowledgeLink>
      </>
    )
  })

  return hOverview
}


const StyledAlert = styled(Alert)`
  background-color: #f1d302;
`
const siteTitle = "Wissen";

export default ({ data }) => {
  const [show, setShow] = useState(true)

  var hAlert = null
  if (show) {
    hAlert = (
      <StyledAlert  onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Was ist das hier?</Alert.Heading>
        <p>
          Das hier ist meine <span role="img" aria-label="sheet">📝</span>  Notiz-Sammlung zu diversen Themen, die mir als
          Nachschlagewerk dient.{" "}
        </p>
        <p>
          Bereits im Studium habe ich nichts davon gehalten Wissen für mich zu
          behalten, weshalb ich auf diesem Wege meine Notizen öffentlich
          zugänglich mache, sodass vielleicht auch weitere Personen davon
          profitieren können.
        </p>
        <p>
        <span role="img" aria-label="warning">⚠️</span> Sehr wahrscheinlich sind nicht alle Notiz-Inhalte korrekt.{" "}
          <br></br>
          <span role="img" aria-label="wave">🙋</span> Feedback ist immer gerne gesehen.
        </p>
      </StyledAlert>
    )
  } 




  return (
    <Layout title={siteTitle} >
      <SEO title={siteTitle}  />
      {hAlert}
      <h6>{data.allMarkdownRemark.totalCount} Themen</h6>
      {createKnowledgeOverview(data)}
    </Layout>
  )
}

// It's important to filter out articles, that don`t have a category and title
export const query = graphql`
  {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___category, frontmatter___title]
        order: ASC
      }
      filter: {
        frontmatter: { category: { ne: null }, title: { ne: null } }
        fileAbsolutePath: { regex: "/knowledge-repo/" }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            category
            tags
          }
          fileAbsolutePath
          tableOfContents
        }
      }
    }
  }
`
