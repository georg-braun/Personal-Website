import "bootstrap/dist/css/bootstrap.min.css"

import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogEntry from "../components/blog-entry"

function createBlogOverview(_blogdata) {
  return _blogdata.edges.map(({ node }) => {
    return <BlogEntry title={node.frontmatter.title} path={node.fields.slug} date={node.frontmatter.date} category={node.frontmatter.category} imageName={node.frontmatter.image} excerpt={node.frontmatter.excerpt}></BlogEntry>
    
  })
}

export default ({ data }) => (

  <Layout>
    <SEO title="Blog" />
    {createBlogOverview(data.blogdata)}
  </Layout>
)

export const query = graphql`
  {
    blogdata: allMarkdownRemark(
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
      filter: {
        frontmatter: { category: { ne: null }, title: { ne: null } }
        fileAbsolutePath: { regex: "/blog/" }
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
            date(formatString: "DD MMMM YYYY", locale: "de-DE")
            excerpt
            image
          }
          fileAbsolutePath
          excerpt
        }
      }
    }
    
  }
`
