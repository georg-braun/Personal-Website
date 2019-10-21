import React from "react"
import { Row, Col } from "react-bootstrap"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import {Icon, Header} from "semantic-ui-react"

const BlogEntryMetadata = styled.span`
  margin-right: 20px;
  color: grey;
`
const BlogEntryRow = styled(Row)`
  margin-bottom: 40px;
`

const BlogEntryExcerpt = styled.div`
  margin-top: 5px;
`


const BlogEntry = ({
  title,
  path,
  category,
  date,
  excerpt,
  imageName,
  timeToRead,
}) => {
  return (
    <>
      <BlogEntryRow>
        
        <Col>
          <Link to={path}>
            <Header>{title}</Header>
          
          <BlogEntryMetadata>{date}</BlogEntryMetadata>
          <BlogEntryMetadata><Icon name="clock outline" /> {timeToRead} min</BlogEntryMetadata>
          </Link>
          <BlogEntryExcerpt>{excerpt}</BlogEntryExcerpt>
          
        </Col>
      </BlogEntryRow>
    </>
  )
}

export default BlogEntry
