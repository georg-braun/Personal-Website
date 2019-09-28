import React from "react"
import { Row, Col, Badge } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledBadge = styled(Badge)`
  margin-right: 3px;
`

const KnowledgeLink = ({ title, path, tags }) => {
  var hArticleTags = null
  if (tags !== null) {
    hArticleTags = tags.map(tag => {
      return <StyledBadge key={tag} variant="secondary">{tag}</StyledBadge>
    })
  }

  return (
    <>
      <Row key={title}>
        <Col>
          <Link to={path}>
            <h6>{title}</h6>
          </Link>
        </Col>
        <Col>{hArticleTags}</Col>
      </Row>
    </>
  )
}

export default KnowledgeLink
