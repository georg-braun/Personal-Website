import "bootstrap/dist/css/bootstrap.min.css"

import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Blog" />

    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <p>
          {node.fileAbsolutePath}
        </p>
        <p>{node.excerpt}</p>
      </div>
    ))}

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          fileAbsolutePath
        }
      }
    }
  }
`
