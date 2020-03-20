import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"


// Kapselt den Artikel Inhalt
const ArticleContainer = styled.div`
  margin-top: 20px;
`



export default ({ data }) => {
  const post = data.markdownRemark
  const tags  = post.frontmatter.tags != null ?
    <small><i>Tags: {post.frontmatter.tags.join(", ")}</i></small>
    : <></> 

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="markdown-post">
        <h1>{post.frontmatter.title}</h1>

        {tags}
       
        <ArticleContainer dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`
