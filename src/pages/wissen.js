import "bootstrap/dist/css/bootstrap.min.css"

import React from "react"
import { graphql } from "gatsby"

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

export default ({ data }) => (
  <Layout>
    <SEO title="Wissen" />
    <h6>{data.allMarkdownRemark.totalCount} Themen</h6>
    {createKnowledgeOverview(data)}
  </Layout>
)

// It's important to filter out articles, that don`t have a category and title
export const query = graphql`
{
  allMarkdownRemark(sort: {fields: [frontmatter___category, frontmatter___title], order: ASC}, filter: {frontmatter: {category: {ne: null}, title: {ne: null}}, fileAbsolutePath: {regex: "/knowledge-repo/"}}) {
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
      }
    }
  }
}
`
