import React, { useState } from "react"
import { graphql } from "gatsby"
import { Input } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import KnowledgeLink from "../components/knowledge-link"
import styled from "styled-components"
import dateFormat from "dateformat"


const siteTitle="Home";

const SearchContainerWideScreen = styled.div`
  position: fixed;
  width: 200px;
  right: 3vw;

  @media (max-width: 1729px) {
    display: none !important;
  }  
`

const SearchContainerSmallScreen = styled.div`
  margin-bottom: 20px;

  @media (min-width: 1730px) {
    display: none !important;
  }  
`

const StyledInputContainer = styled.div`
  width: 200px;
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

function createKnowledgeOverview(data, filterString) {
  var hOverview = data.posts.edges.map(({ node }) => {

    var hKnowledgeEntry = null;

    if (
      node.frontmatter.title.includes(filterString) ||
      node.rawMarkdownBody.includes(filterString) ||
      (node.frontmatter.tags != null && node.frontmatter.tags.includes(filterString))
    ) {
      
      var hBlogEntryDateString = "";
      if (node.frontmatter.date != null){
        hBlogEntryDateString = dateFormat(node.frontmatter.date, "deutschKurz")
      }


      hKnowledgeEntry = (
        <>
          <KnowledgeLink
            title={node.frontmatter.title}
            path={node.fields.slug}       
            date={hBlogEntryDateString}    
            tags={node.frontmatter.tags} 
          ></KnowledgeLink>
        </>
      )
    }

    return hKnowledgeEntry;
   
  })

  return hOverview
}

function createTagContainer(tags, filterMethod){

  
  var hTags = tags.map((tag) => {
    return (
    <StyledTag onClick={() => {filterMethod(tag)}}>
      
      {tag}
    </StyledTag>
      )
  })

  return hTags;
  
}



export default ({ data }) => {
  
  const [filter, setFilter] = useState("")
  dateFormat.masks.deutschKurz = 'dd.mm.yyyy';

  return (
    <Layout>
      <SEO title={siteTitle} />
      
      <h6>{data.posts.totalCount} Beiträge</h6>

      <SearchContainerSmallScreen>
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
          placeholder="Titel, Inhalt, Tag"/>
          </StyledInputContainer>
          {createTagContainer(data.tags.distinct, setFilter)}          
      </SearchContainerSmallScreen>

      <SearchContainerWideScreen>
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
          placeholder="Titel, Inhalt, Tag"/>
          </StyledInputContainer>
          {createTagContainer(data.tags.distinct, setFilter)}          
      </SearchContainerWideScreen>
      

      {createKnowledgeOverview(data, filter)}
    </Layout>
  )
}


export const query = graphql`
  {
    posts: allMarkdownRemark(
      sort: {
        fields: [frontmatter___date]
        order: ASC
      }
      filter: {
        frontmatter: { title: { ne: null } }
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
            tags
            date
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
