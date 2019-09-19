import React from "react"
import { Row, Col, Badge } from "react-bootstrap"
import { useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

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

const StyledBlogImg = styled(Img)`
  :hover {
    transform: translate(0, -5px);
    -webkit-transform: translate(0, -5px);
    -o-transform: translate(0, -5px);
    -moz-transform: translate(0, -5px);
    transition-duration: 0.5s;
  }
`

function getBlogEntryImage(data, imageName) {
  const hImageEdge = data.allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === imageName
  )

  var hBlogImage = null
  if (hImageEdge) {
    hBlogImage = <StyledBlogImg fluid={hImageEdge.node.fluid} alt="" />
  }

  return hBlogImage
}

const BlogEntry = ({
  title,
  path,
  category,
  date,
  excerpt,
  imageName,
}) => {
  // As far as I know it`s not possible to use variables in static queries. So I try to get all images and filter them afterwards.
  const data = useStaticQuery(graphql`
    {
      allImageSharp {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  var hBlogEntryImage = getBlogEntryImage(data, imageName)

  return (
    <>
      <BlogEntryRow>
        <Col lg={4} md={4} sm={12}>
          <Link to={path}>{hBlogEntryImage}</Link>
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
