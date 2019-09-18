import "bootstrap/dist/css/bootstrap.min.css"

import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import KnowledgeLink from "../components/knowledge-link"

export default ({ data }) => (
  <Layout>
    <SEO title="Wissen" />
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <KnowledgeLink
        title={node.frontmatter.title}
        path={node.fields.slug}
        tags={node.frontmatter.tags}
      ></KnowledgeLink>
    ))}
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: [frontmatter___title], order: ASC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category
            title
            tags
          }
        }
      }
    }
  }
`
