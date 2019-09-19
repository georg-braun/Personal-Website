import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"


const MetadataEntry = styled.span`
  margin-right: 20px;
  color: grey;
`

const StyledMetadata = styled.div`
  margin-bottom: 30px;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <StyledMetadata>
        <MetadataEntry>{post.frontmatter.date}</MetadataEntry>
        <MetadataEntry>Kategorie: {post.frontmatter.category}</MetadataEntry>
        </StyledMetadata>
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
        category
        date(formatString: "DD MMMM YYYY", locale: "de-DE")
      }
    }
  }
`
