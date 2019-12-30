import React, { useState } from "react"
import { graphql } from "gatsby"
import { Input } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogEntry from "../components/blog-entry"
import KnowledgeLink from "../components/knowledge-link"
import styled from "styled-components"

function createBlogOverview(_blogdata) {
  return _blogdata.edges.map(({ node }) => {
    return <BlogEntry key={node.frontmatter.title} title={node.frontmatter.title} path={node.fields.slug} date={node.frontmatter.date} category={node.frontmatter.category} imageName={node.frontmatter.image} excerpt={node.frontmatter.excerpt} timeToRead={node.timeToRead}></BlogEntry>
    
  })
}
const siteTitle="Home";

const SearchContainer = styled.div`
  position: fixed;
  width: 300px;
  right: 5vw;
  
`

const StyledInputContainer = styled.div`
  width: 300px;
  margin-bottom: 5px;
  
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

var FTags;

function createKnowledgeOverview(data, filterString) {
  var hOverview = data.posts.edges.map(({ node }) => {

    var hKnowledgeEntry = null;

    if (
      node.frontmatter.title.includes(filterString) ||
      node.rawMarkdownBody.includes(filterString)
    ) {
      

      hKnowledgeEntry = (
        <>
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

function createTagContainer(tags){

  
  var hTags = tags.map((tag) => {
    return (
    <StyledTag onClick={() => {console.log("test")}}>
      
      {tag}
    </StyledTag>
      )
  })

  return hTags;
  
}



export default ({ data }) => {
  
  const [filter, setFilter] = useState("")

  return (
    <Layout>
      <SEO title={siteTitle} />
      
      <h6>{data.posts.totalCount} Themen</h6>
      <SearchContainer>
        <StyledInputContainer>
        <Input
          onChange={(event, data) => setFilter(data.value)}
          action={{
            color: "teal",
            labelPosition: "left",
            icon: "search",
            content: "Suche",
          }}
          fluid
          actionPosition="left"
          placeholder="Titel, Inhalt"/>
          </StyledInputContainer>
          {createTagContainer(data.tags.distinct)}
          
      </SearchContainer>
      

      {createKnowledgeOverview(data, filter)}
    </Layout>
  )
}


export const query = graphql`
  {
    posts: allMarkdownRemark(
      sort: {
        fields: [frontmatter___date]
        order: DESC
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

    tags:     
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/knowledge-repo/"}}) {
        distinct(field: frontmatter___tags)
      }
    
    

  }
`
