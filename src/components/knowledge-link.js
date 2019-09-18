import React from "react"
import { Row, Col, Badge } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledBadge = styled(Badge)`
    margin-right: 3px;
`


const KnowledgeLink = ({ title, path, tags }) => {
  return (
    <>
      <Row>
        <Col>
          <Link to={path}>
            <h6>{title}</h6>
          </Link>
        </Col>
        <Col>
          {tags.map(tag => {
            return  <StyledBadge variant="secondary">{tag}</StyledBadge>
          })}
         
        </Col>
      </Row>
    </>
  )
}

export default KnowledgeLink
