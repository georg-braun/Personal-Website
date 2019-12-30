import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Input } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import KnowledgeLink from "../components/knowledge-link"

// Assumes that the data is ordered by category
function createKnowledgeOverview(data, filterString) {
  console.log(filterString)
  var hLastCategory = null

  var hOverview = data.allMarkdownRemark.edges.map(({ node }) => {

    var hKnowledgeEntry = null;

    if (
      node.frontmatter.title.includes(filterString) ||
      node.rawMarkdownBody.includes(filterString)
    ) {
      var hCurrentCategory = node.frontmatter.category

      // Check if a new category header is necessary
      var hCategoryHeader = null
      if (hCurrentCategory !== hLastCategory) {
        hCategoryHeader = <h3>{hCurrentCategory}</h3>
        hLastCategory = hCurrentCategory
      }



      hKnowledgeEntry = (
        <>
          {hCategoryHeader}
          <KnowledgeLink
            title={node.frontmatter.title}
            path={node.fields.slug}            
          ></KnowledgeLink>
        </>
      )
    }

    return hKnowledgeEntry;
   
  })

  return hOverview
}

const siteTitle = "Wissen"

export default ({ data }) => {
  const [show, setShow] = useState(false)
  const [filter, setFilter] = useState("")


  return (
    <Layout>
      <SEO title={siteTitle} />
      
      <h6>{data.allMarkdownRemark.totalCount} Themen</h6>
      <Input
        onChange={(event, data) => setFilter(data.value)}
        action={{
          color: "teal",
          labelPosition: "left",
          icon: "search",
          content: "Suche",
        }}
        actionPosition="left"
        placeholder="Titel, Inhalt"
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
