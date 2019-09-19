import React from "react"
import { Row, Col, Badge } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"

const BlogEntryMetadata = styled.span`
  margin-right: 20px;
  color: grey;
`
const BlogEntryRow = styled(Row)`
  margin-bottom: 40px;
`

const BlogEntryExcerpt = styled.div`
  margin-top: 15px;
`

const BlogImg = styled.img`

:hover {
  transform: translate(0,-5px);
  -webkit-transform: translate(0,-5px);
  -o-transform: translate(0,-5px); 
  -moz-transform: translate(0,-5px);
  transition-duration: .5s;
}
`

const BlogEntry = ({ title, path, category, date, excerpt, image }) => {
  return (
    <>
      <BlogEntryRow>
        <Col lg={4} md={4} sm={12}>
        <Link to={path}>
        <BlogImg src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></BlogImg>
          </Link>
         
        </Col>
        <Col>
          <Link to={path}>
            <h3>{title}</h3>
          </Link>
           <BlogEntryMetadata>{date}</BlogEntryMetadata>     
           <BlogEntryMetadata>Kategorie: {category}</BlogEntryMetadata>   
           <BlogEntryExcerpt>{excerpt}</BlogEntryExcerpt> 

        </Col>
      </BlogEntryRow>
    </>
  )
}

export default BlogEntry
