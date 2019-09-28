import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogEntry from "../components/blog-entry"

function createBlogOverview(_blogdata) {
  return _blogdata.edges.map(({ node }) => {
    return <BlogEntry key={node.frontmatter.title} title={node.frontmatter.title} path={node.fields.slug} date={node.frontmatter.date} category={node.frontmatter.category} imageName={node.frontmatter.image} excerpt={node.frontmatter.excerpt}></BlogEntry>
    
  })
}
const siteTitle="Blog";

export default ({ data }) => (

  <Layout title={siteTitle}>
    <SEO title={siteTitle} />
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
