import React from "react"
import { Row, Col, Badge } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"

const KnowledgeLink = ({ title, path }) => {
  return (
    <>
      <Row key={title}>
        <Col>
          <Link to={path}>
            <h6>{title}</h6>
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default KnowledgeLink
