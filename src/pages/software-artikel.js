import React, { useState } from "react"
import { graphql } from "gatsby"
import { Input } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogLink from "../components/blog-link"
import styled from "styled-components"
import dateFormat from "dateformat"

const siteTitle = "Startseite"

const SearchContainer = styled.div`
  margin-bottom: 20px;
`

const StyledInputContainer = styled.div`
  width: 70vw;
  margin-bottom: 10px;
`

const StyledTag = styled.span`
  font-size: 0.8em;
  margin-right: 5px;
  display: inline-block;
  text-decoration: underline;

  :hover {
    font-weight: bold;
  }
`

function frontmatterIsValid(edge) {
  return (
    edge.node.frontmatter.title !== null && edge.node.frontmatter.title !== ""
  )
}

function createKnowledgeOverview(data, filterString) {
  var hOverview = data.posts.edges
    .filter(_ => frontmatterIsValid(_))
    .map(({ node }) => {
      if (
        node.frontmatter.title.includes(filterString) ||
        node.rawMarkdownBody.includes(filterString) ||
        (node.frontmatter.tags != null &&
          node.frontmatter.tags.includes(filterString))
      ) {
        var hBlogEntryDateString = ""
        if (node.frontmatter.date != null) {
          hBlogEntryDateString = dateFormat(
            node.frontmatter.date,
            "deutschKurz"
          )
        }

        var hKnowledgeEntry = (
          <>
            <hr></hr>
            <BlogLink
              title={node.frontmatter.title}
              path={node.fields.slug}
              date={hBlogEntryDateString}
              tags={node.frontmatter.tags}
            ></BlogLink>
          </>
        )
      }

      return hKnowledgeEntry
    })

  return hOverview
}

function createTagContainer(tags, filterMethod) {
  var hTags = tags.map(tag => {
    return (
      <StyledTag
        onClick={() => {
          filterMethod(tag)
        }}
      >
        {tag}
      </StyledTag>
    )
  })

  return hTags
}

export default ({ data }) => {
  const [filter, setFilter] = useState("")
  dateFormat.masks.deutschKurz = "dd.mm.yyyy"

  return (
    <Layout>
      <SEO title={siteTitle} />
      <p>
        Hier veröffentliche ich bewusst kurz gehaltene Artikel zu den Themen
        Softwareentwicklung, .NET und Cloud.
      </p>
      <p>
        Ich verfolge dabei das Ziel mein eigenes Verständnis der Themen zu
        verbessern. Sollten auch weitere Personen von den Artikeln profitieren
        freut mich das sehr :)
      </p>

      <SearchContainer>
        <StyledInputContainer>
          <Input
            onChange={(event, data) => setFilter(data.value)}
            action={{
              color: "teal",
              icon: "search",
            }}
            fluid
            value={filter}
            actionPosition="left"
            placeholder="Titel, Inhalt, Tag"
          />
        </StyledInputContainer>
        {createTagContainer(data.tags.distinct, setFilter)}
      </SearchContainer>

      {createKnowledgeOverview(data, filter)}
    </Layout>
  )
}

export const query = graphql`
{
    posts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {title: {ne: null}, category: {eq: "Software"}}}) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            tags
            date
            category
          }
          fileAbsolutePath
          tableOfContents
          rawMarkdownBody
        }
      }
    }
    tags: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/knowledge-repo/"}}) {
      distinct(field: frontmatter___tags)
    }
  }
`
