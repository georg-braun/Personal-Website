import React from "react"
import { Row, Col } from "react-bootstrap"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

const StyledLinkContainer = styled.div`
  margin-bottom: 3px;
  padding: 10px 5px 10px 5px;

  border-radius: 1px;
`

const StyledLink = styled(GatsbyLink)`
  color: black;
`

const StyledDate = styled.div`
  text-align: right;
`

const BlogLink = ({ title, path, tags, date }) => {
  var hTagString = ""
  if (tags != null) {
    hTagString = tags.join(", ")
  }

  return (
    <StyledLinkContainer>
      <StyledLink to={path} color="black">
        <Row key={title}>
          <Col>
            <p>{title}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <small>{hTagString}</small>
          </Col>          
        </Row>
      </StyledLink>
    </StyledLinkContainer>
  )
}

export default BlogLink
