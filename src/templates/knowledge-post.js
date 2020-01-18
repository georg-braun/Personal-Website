import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"






export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="markdown-post">
        <h1>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.tags.join(", ")}</small>
       
        
        <div dangerouslySetInnerHTML={{ __html: post.tableOfContents}} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      frontmatter {
        title
        tags
      }
    }
  }
`
