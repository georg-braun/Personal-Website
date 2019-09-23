import React, { useState } from "react"
import { graphql } from "gatsby"
import { Alert } from "react-bootstrap"
import styled from "styled-components"
import { Input } from 'semantic-ui-react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import KnowledgeLink from "../components/knowledge-link"
import Contactlist from "../components/contactlist"



// Assumes that the data is ordered by category
function createKnowledgeOverview(data, filterString) {
  var hLastCategory = null

  var hOverview = data.allMarkdownRemark.edges.map(({ node }) => {
    
    if (node.frontmatter.title.includes(filterString) || node.rawMarkdownBody.includes(filterString) || node.frontmatter.tags.includes(filterString)) {

      var hCurrentCategory = node.frontmatter.category
  
      // Check if a new category header is necessary
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
    }
  })

  return hOverview
}


const StyledAlert = styled(Alert)`
  background-color: #1b1c1d;
  color: white;
`



const siteTitle = "Wissen";

export default ({ data }) => {
  const [show, setShow] = useState(true)
  const [filter, setFilter] = useState("")

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
          <span role="img" aria-label="wave">🙋</span> Feedback ist immer gerne gesehen: <strong>@</strong> ( <Contactlist></Contactlist> )
        </p>
      </StyledAlert>
    )
  } 




  return (
    <Layout title={siteTitle} >
      <SEO title={siteTitle}  />
      {hAlert}
      <h6>{data.allMarkdownRemark.totalCount} Themen</h6>
      <Input laceholder="Titel, Inhalt, Tag" onChange={(event, data) => setFilter(data.value)}
          action={{
            color: 'teal',
            labelPosition: 'left',
            icon: 'search',
            content: 'Suche',
          }}
          actionPosition='left'
          placeholder='Titel, Inhalt, Tag'
      ></Input>

      {createKnowledgeOverview(data, filter)}
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
          rawMarkdownBody
        }
      }
    }
  }
`
